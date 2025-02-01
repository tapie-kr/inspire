export type PaginationItem = {
  type:   'page' | 'ellipsis';
  value?: number;
};

export function getCurrentItems(min: number,
  max: number,
  visiblePage: number,
  currentPage: number): Array<{
    type:   'page' | 'ellipsis';
    value?: number;
  }> {
  function getRange(size: number, c: number) {
    if (size % 2) {
      const half = (size - 1) / 2;

      return [c - half, c + half];
    } else {
      return [c - (size / 2), c + ((size / 2) - 1)];
    }
  }

  function clamp(l: number, r: number, size: number) {
    let length = r - l + 1;

    if (length < size) {
      l -= size - length;
    }

    if (l < min) {
      l = min;

      r = l + size - 1;
    }

    if (r > max) {
      r = max;

      l = r - size + 1;
    }

    return [l, r];
  }

  let [left, right] = getRange(visiblePage, currentPage);

  [left, right] = clamp(left, right, visiblePage);

  if (right >= max) {
    const result: PaginationItem[] = [];

    for (let i = left; i <= right; i++) {
      result.push({
        type:  'page',
        value: i,
      });
    }

    return result;
  } else {
    if (right === max - 1) {
      const blockSize = visiblePage - 1;

      let [l, r] = getRange(blockSize, currentPage);

      [l, r] = clamp(l, r, blockSize);

      const result: PaginationItem[] = [];

      for (let i = l; i <= r; i++) {
        result.push({
          type:  'page',
          value: i,
        });
      }

      result.push({
        type:  'page',
        value: max,
      });

      return result;
    } else {
      const blockSize = visiblePage - 2;

      let [l, r] = getRange(blockSize, currentPage);

      [l, r] = clamp(l, r, blockSize);

      const result: PaginationItem[] = [];

      for (let i = l; i <= r; i++) {
        result.push({
          type:  'page',
          value: i,
        });
      }

      result.push({ type: 'ellipsis' });

      result.push({
        type:  'page',
        value: max,
      });

      return result;
    }
  }
}
