export function domInjector(seletor: string) {
  return (target: any, propertyKey: string) => {
    let element: HTMLElement;

    const getter = function () {
      //   if (!element) {
      //     element = <HTMLElement>document.querySelector(seletor);
      //     console.log(`executando getElement ${propertyKey}`);
      //   }
      //   const element = document.querySelector(seletor);
      //   return element;
      return !!element ? element : <HTMLElement>document.querySelector(seletor);
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
