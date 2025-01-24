import { defaultCubicBezier } from '@/lib/animation/cubic-bezier';

export function getCSSTransition(
  property: string,
  duration: number,
  timingFunction: string | Array<number> = defaultCubicBezier,
): string {
  const cubicBezier = Array.isArray(timingFunction)
    ? `cubic-bezier(${timingFunction.join(',')})`
    : timingFunction;

  return `${property} ${duration}s ${cubicBezier}`;
}
