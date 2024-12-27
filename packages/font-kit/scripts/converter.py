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
  ttf_path, output_dir = args
  try:
    output_path = Path(output_dir) / f'{ttf_path.stem}.woff2'
    original_size = get_file_size(ttf_path)
    
    font = TTFont(ttf_path)
    font.flavorData = WOFFFlavorData()
    font.flavor = 'woff2'
    font.save(str(output_path))
    
    converted_size = get_file_size(output_path)
    reduction = ((original_size - converted_size) / original_size) * 100
    
    return {
      'success': True,
      'ttf_path': ttf_path,
      'output_path': output_path,
      'original_size': original_size,
      'converted_size': converted_size,
      'reduction': reduction
    }
    
  except Exception as e:
    return {
      'success': False,
      'ttf_path': ttf_path,
      'error': str(e)
    }

def convert_to_woff2(input_dir, output_dir):
  if not os.path.exists(input_dir):
    print(f'에러: 입력 디렉토리가 존재하지 않습니다: {input_dir}')
    sys.exit(1)
  
  os.makedirs(output_dir, exist_ok=True)
  
  input_path = Path(input_dir)
  ttf_files = list(input_path.glob('*.ttf'))
  
  if not ttf_files:
    print(f'경고: {input_dir}에서 TTF 파일을 찾을 수 없습니다.')
    return
  
  num_cores = multiprocessing.cpu_count()
  print(f'CPU 코어 수: {num_cores}')
  print(f'총 변환할 파일 수: {len(ttf_files)}')
  print('-' * 50)
  
  work_items = [(ttf_path, output_dir) for ttf_path in ttf_files]
  
  total_original_size = 0
  total_converted_size = 0
  
  with ProcessPoolExecutor(max_workers=num_cores) as executor:
    results = list(executor.map(convert_single_font, work_items))
  
  for result in results:
    if result['success']:
      total_original_size += result['original_size']
      total_converted_size += result['converted_size']
      
      print(f'변환 완료: {result['ttf_path'].name} -> {result['output_path'].name}')
      print(f'  원본 크기: {result['original_size']:.1f}KB')
      print(f'  변환 크기: {result['converted_size']:.1f}KB')
      print(f'  압축률: {result['reduction']:.1f}%')
      print('-' * 50)
    else:
      print(f'에러: {result['ttf_path'].name} 변환 실패: {result['error']}')
      print('-' * 50)
  
  if total_original_size > 0:
    total_reduction = ((total_original_size - total_converted_size) / total_original_size) * 100
    print('\n전체 통계:')
    print(f'총 원본 크기: {total_original_size:.1f}KB')
    print(f'총 변환 크기: {total_converted_size:.1f}KB')
    print(f'전체 압축률: {total_reduction:.1f}%')

def main():
  if len(sys.argv) != 3:
    print('사용법: python3 convert.py <입력_디렉토리> <출력_디렉토리>')
    sys.exit(1)
  
  input_dir = sys.argv[1]
  output_dir = sys.argv[2]
  
  convert_to_woff2(input_dir, output_dir)

if __name__ == '__main__':
  main()
