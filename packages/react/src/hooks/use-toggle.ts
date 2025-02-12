import { useCallback, useState } from 'react';

export function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(prev => !prev), []);
  const setter = useCallback((value: boolean) => setState(value), []);

  return [
    state,
    toggle,
    setter,
  ] as const;
}

export type Toggler = ReturnType<typeof useToggle>;
