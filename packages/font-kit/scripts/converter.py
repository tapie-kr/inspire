#!/usr/bin/env python3

import os
import sys
from pathlib import Path
from fontTools.ttLib import TTFont

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
  
  for ttf_path in ttf_files:
    try:
      output_path = Path(output_dir) / f'{ttf_path.stem}.woff2'
      
      font = TTFont(ttf_path)
      font.save(str(output_path))
      
      print(f'변환 완료: {ttf_path.name} -> {output_path.name}')
        
    except Exception as e:
      print(f'에러: {ttf_path.name} 변환 실패: {str(e)}')

def main():
  if len(sys.argv) != 3:
    print('사용법: python3 converter.py <입력_디렉토리> <출력_디렉토리>')
    sys.exit(1)
  
  input_dir = sys.argv[1]
  output_dir = sys.argv[2]
  
  convert_to_woff2(input_dir, output_dir)

if __name__ == '__main__':
  main()
