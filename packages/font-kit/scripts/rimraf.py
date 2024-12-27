#!/usr/bin/env python3

import sys
import shutil
from pathlib import Path

def remove_path(path):
  path = Path(path)
  if path.is_file() or path.is_symlink():
    path.unlink()
  elif path.is_dir():
    shutil.rmtree(path)

def main():
  if len(sys.argv) < 2:
    sys.exit(1)
  for path in sys.argv[1:]:
    try:
      remove_path(path)
    except Exception:
      sys.exit(1)

if __name__ == '__main__':
  main()
