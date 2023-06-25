export const chooseMultiple = (value, cases, defaultCase) => {
    for (const c of cases) {
        const caseValue = c[0];
        for (const cv of caseValue) {
            console.log(cv, value);
            if (cv === value) {
                const fn = c[1];
                return fn();
            }
        }
    }
    return defaultCase === null || defaultCase === void 0 ? void 0 : defaultCase();
};
//# sourceMappingURL=directives.js.map