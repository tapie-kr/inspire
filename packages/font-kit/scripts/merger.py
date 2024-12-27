#!/usr/bin/env python3

import os
import sys
import traceback
import json
import argparse
from fontTools.ttLib import TTFont
from multiprocessing import Pool, cpu_count
from typing import Tuple

class FontMerger:
  def __init__(self, debug=False):
    self.debug = debug
    self.styles = {
      'thin': ['thin', '100'],
      'extralight': ['extralight', '200'],
      'light': ['light', '300'],
      'regular': ['regular', 'normal', '400'],
      'medium': ['medium', '500'],
      'semibold': ['semibold', '600'],
      'bold': ['bold', '700'],
      'extrabold': ['extrabold', '800'],
      'black': ['black', '900']
    }

    self.weights = {
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'regular': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900
    }

  def debug_print(self, message):
    if self.debug:
      print(message)

  def get_style(self, filename):
    name = filename.replace('.ttf', '')
    style = name.split('-')[-1].lower()
    if style not in self.styles:
      return 'regular'
    return style

  def set_meta(self, font, family, style):
    self.debug_print(f"디버그: 메타데이터 설정 시작 - 스타일: {style}")

    os2 = font['OS/2']
    
    try:
      weight = self.weights[style]
      self.debug_print(f"디버그: 가중치 설정 - {style}: {weight}")
      os2.usWeightClass = weight
    except KeyError:
      self.debug_print(f"디버그: 가중치 설정 실패 - 스타일 {style}을 찾을 수 없음")
      os2.usWeightClass = 400
    
    if style == 'regular':
      os2.fsSelection = 0b01000000
      font['head'].macStyle = 0x0
    elif style == 'bold':
      os2.fsSelection = 0b00100000
      font['head'].macStyle = 0x1
    else:
      os2.fsSelection = 0b00000000
      font['head'].macStyle = 0x0
    
    try:
      with open('./package.json') as f:
        version = json.load(f)['version']
    except:
      version = '1.0.0'
      self.debug_print("경고: package.json을 찾을 수 없습니다. 기본 버전 1.0.0을 사용합니다.")

    name = font['name']
    style_name = style.capitalize()
    platforms = [(1, 0, 0), (3, 1, 0x409)]
    
    names = {
      0: "Copyright (c) 2025 TAPIE",
      1: family,
      2: style_name,
      3: f"{family}-{style_name}",
      4: f"{family} {style_name}",
      5: f"Version {version}", 
      6: f"{family}-{style_name}".replace(" ", ""),
      13: "This Font Software is licensed under the SIL Open Font License, Version 1.1.",
      14: "http://scripts.sil.org/OFL",
      16: family,
      17: style_name,
    }
    
    name.names = []
    for nameID, string in names.items():
      for platformID, platEncID, langID in platforms:
        name.setName(string, nameID, platformID, platEncID, langID)

    self.debug_print(f"디버그: 메타데이터 설정 완료 - 스타일: {style}")

  def merge_fonts(self, merge_params: Tuple[str, str, str, str, str, bool]):
    korean_font_path, english_font_path, output_path, family, style, debug = merge_params
    
    try:
      if debug:
        print(f"디버그: 폰트 병합 시작 - 스타일: {style}")
      
      kr_font = TTFont(korean_font_path)
      en_font = TTFont(english_font_path)

      hangul_ranges = [
        (0xAC00, 0xD7A3),
        (0x1100, 0x11FF),
        (0x3130, 0x318F),
      ]

      kr_cmap = kr_font.getBestCmap()
      hangul_glyphs = {}
      for code, glyph_name in kr_cmap.items():
        if any(start <= code <= end for start, end in hangul_ranges):
          hangul_glyphs[code] = glyph_name

      en_glyf = en_font['glyf']
      en_hmtx = en_font['hmtx']
      en_cmap = en_font.getBestCmap()

      for code, glyph_name in hangul_glyphs.items():
        if code not in en_cmap:
          try:
            kr_glyph = kr_font['glyf'][glyph_name]
            en_glyf[glyph_name] = kr_glyph

            if glyph_name in kr_font['hmtx'].metrics:
              kr_metric = kr_font['hmtx'].metrics[glyph_name]
              en_hmtx.metrics[glyph_name] = kr_metric

            en_cmap[code] = glyph_name
          except Exception as e:
            if debug:
              print(f"글리프 복사 중 오류: {glyph_name} - {e}")

      if debug:
        print(f"디버그: 메타데이터 설정 호출 직전 - 스타일: {style}")
      self.set_meta(en_font, family, style)

      en_font['maxp'].recalc(en_font)
      en_font.save(output_path)
      
      print(f"폰트 병합 완료: {os.path.basename(output_path)}")
      return True

    except Exception as e:
      print(f"폰트 병합 중 오류 발생: {e}")
      traceback.print_exc()
      return False

  def scan_fonts(self, directory):
    fonts = []
    for filename in os.listdir(directory):
      if filename.lower().endswith('.ttf'):
        path = os.path.join(directory, filename)
        try:
          style = self.get_style(filename)
          fonts.append({
            'path': path,
            'style': style,
            'name': filename
          })
        except Exception as e:
          self.debug_print(f"폰트 스캔 경고: {filename} - {e}")
    return fonts

  def run(self, family_name, korean_dir, english_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)

    kr_fonts = self.scan_fonts(korean_dir)
    self.debug_print("디버그: 한글 폰트 스캔 결과:")
    for font in kr_fonts:
      self.debug_print(f"- {font['name']}: {font['style']} 스타일")

    en_fonts = self.scan_fonts(english_dir)
    self.debug_print("디버그: 영문 폰트 스캔 결과:")
    for font in en_fonts:
      self.debug_print(f"- {font['name']}: {font['style']} 스타일")

    merge_tasks = []
    for kr_font in kr_fonts:
      matched_en_font = next(
        (en_font for en_font in en_fonts if en_font['style'] == kr_font['style']), 
        None
      )

      if matched_en_font:
        output_filename = f"{family_name.replace(' ', '_')}-{kr_font['style'].capitalize()}.ttf"
        output_path = os.path.join(output_dir, output_filename)

        print(f"\n{kr_font['style'].capitalize()} 스타일 처리 준비 중")
        print(f"한글 폰트: {kr_font['name']}")
        print(f"영문 폰트: {matched_en_font['name']}")

        merge_tasks.append((
          kr_font['path'],
          matched_en_font['path'],
          output_path,
          family_name,
          kr_font['style'],
          self.debug
        ))
      else:
        print(f"\n경고: {kr_font['style']} 스타일의 매칭되는 영문 폰트가 없습니다.")

    num_cores = cpu_count()
    print(f"\n{num_cores}개의 CPU 코어를 사용하여 병렬 처리를 시작합니다.")
    
    with Pool(num_cores) as pool:
      results = pool.map(self.merge_fonts, merge_tasks)
    
    successful = sum(1 for result in results if result)
    failed = len(results) - successful
    print(f"\n처리 완료: 성공 {successful}개, 실패 {failed}개")

def main():
  parser = argparse.ArgumentParser(description='폰트 병합 스크립트')
  parser.add_argument('family_name', help='폰트 패밀리 이름')
  parser.add_argument('korean_dir', help='한글 폰트 디렉토리')
  parser.add_argument('english_dir', help='영문 폰트 디렉토리')
  parser.add_argument('output_dir', help='출력 디렉토리')
  parser.add_argument('--debug', action='store_true', help='디버그 모드 활성화')
  
  args = parser.parse_args()

  if not (os.path.exists(args.korean_dir) and os.path.exists(args.english_dir)):
    print("입력 디렉토리를 찾을 수 없습니다.")
    sys.exit(1)

  merger = FontMerger(debug=args.debug)
  merger.run(args.family_name, args.korean_dir, args.english_dir, args.output_dir)

if __name__ == "__main__":
  main()
