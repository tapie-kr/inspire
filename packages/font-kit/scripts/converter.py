#!/usr/bin/env python3

import os
import sys
import multiprocessing
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.ttLib.sfnt import WOFFFlavorData
from concurrent.futures import ProcessPoolExecutor

def get_file_size(path):
  return os.path.getsize(path) / 1024

def convert_single_font(args):
  ttf_path, otf_dir, woff2_dir = args
  result = {
    'ttf_path': ttf_path,
    'success': True,
    'conversions': []
  }
  
  try:
    font = TTFont(ttf_path)
    original_size = get_file_size(ttf_path)
    
    otf_path = Path(otf_dir) / f'{ttf_path.stem}.otf'
    font.save(str(otf_path))
    otf_size = get_file_size(otf_path)
    otf_reduction = ((original_size - otf_size) / original_size) * 100
    
    result['conversions'].append({
      'type': 'otf',
      'output_path': otf_path,
      'size': otf_size,
      'reduction': otf_reduction
    })
    
    woff2_path = Path(woff2_dir) / f'{ttf_path.stem}.woff2'
    font.flavorData = WOFFFlavorData()
    font.flavor = 'woff2'
    font.save(str(woff2_path))
    woff2_size = get_file_size(woff2_path)
    woff2_reduction = ((original_size - woff2_size) / original_size) * 100
    
    result['conversions'].append({
      'type': 'woff2',
      'output_path': woff2_path,
      'size': woff2_size,
      'reduction': woff2_reduction
    })
    
    result['original_size'] = original_size
    
  except Exception as e:
    result['success'] = False
    result['error'] = str(e)
  
  return result

def convert_fonts(input_dir, otf_dir, woff2_dir):
  if not os.path.exists(input_dir):
    print(f'에러: 입력 디렉토리가 존재하지 않습니다: {input_dir}')
    sys.exit(1)
  
  os.makedirs(otf_dir, exist_ok=True)
  os.makedirs(woff2_dir, exist_ok=True)
  
  input_path = Path(input_dir)
  ttf_files = list(input_path.glob('*.ttf'))
  
  if not ttf_files:
    print(f'경고: {input_dir}에서 TTF 파일을 찾을 수 없습니다.')
    return
  
  num_cores = multiprocessing.cpu_count()
  print(f'CPU 코어 수: {num_cores}')
  print(f'총 변환할 파일 수: {len(ttf_files)}')
  print('-' * 50)
  
  work_items = [(ttf_path, otf_dir, woff2_dir) for ttf_path in ttf_files]
  
  total_stats = {
    'original': 0,
    'otf': 0,
    'woff2': 0
  }
  
  with ProcessPoolExecutor(max_workers=num_cores) as executor:
    results = list(executor.map(convert_single_font, work_items))
  
  for result in results:
    if result['success']:
      total_stats['original'] += result['original_size']
      
      print(f'변환 완료: {result["ttf_path"].name}')
      print(f'  원본 크기: {result["original_size"]:.1f}KB')
      
      for conv in result['conversions']:
        print(f'  {conv["type"].upper()} 변환:')
        print(f'    파일: {conv["output_path"].name}')
        print(f'    크기: {conv["size"]:.1f}KB')
        print(f'    압축률: {conv["reduction"]:.1f}%')
        
        total_stats[conv['type']] += conv['size']
      
      print('-' * 50)
    else:
      print(f'에러: {result["ttf_path"].name} 변환 실패: {result["error"]}')
      print('-' * 50)
  
  if total_stats['original'] > 0:
    print('\n전체 통계:')
    print(f'총 원본 크기: {total_stats["original"]:.1f}KB')
    print(f'총 OTF 크기: {total_stats["otf"]:.1f}KB')
    print(f'OTF 전체 압축률: {((total_stats["original"] - total_stats["otf"]) / total_stats["original"] * 100):.1f}%')
    print(f'총 WOFF2 크기: {total_stats["woff2"]:.1f}KB')
    print(f'WOFF2 전체 압축률: {((total_stats["original"] - total_stats["woff2"]) / total_stats["original"] * 100):.1f}%')

def main():
  if len(sys.argv) != 4:
    print('사용법: python3 converter.py <입력_디렉토리> <otf_디렉토리> <woff2_디렉토리>')
    sys.exit(1)
  
  input_dir = sys.argv[1]
  otf_dir = sys.argv[2]  
  woff2_dir = sys.argv[3]
  
  convert_fonts(input_dir, otf_dir, woff2_dir)

if __name__ == '__main__':
  main()
