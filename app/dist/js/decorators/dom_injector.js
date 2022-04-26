export function domInjector(seletor) {
    return (target, propertyKey) => {
        let element;
        const getter = function () {
            return !!element ? element : document.querySelector(seletor);
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
//# sourceMappingURL=dom_injector.js.map