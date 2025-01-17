/**
 * 반응형 디자인 개발을 위한 미디어 쿼리 브레이크포인트
 *
 * @description
 * 오름차순으로 정렬해야 하며 해당 값 이하면 적용된다.
 */
export const breakpoint = [768] as const;

export type Breakpoint = (typeof breakpoint)[number];
