

export const chooseMultiple = <T, V>(
    value: T,
    cases: Array<[T[], () => V]>,
    defaultCase?: () => V
  ) => {
    for (const c of cases) {
      const caseValue = c[0];
      for (const cv of caseValue) {
        if (cv === value) {
          const fn = c[1];
          return fn();
        }
      }
    }
    return defaultCase?.();
  };