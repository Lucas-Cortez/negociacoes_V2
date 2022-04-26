export function logarTempoExecucao(emSegundos: boolean = false) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const divisor = emSegundos ? 1000 : 1;
      const unidade = emSegundos ? "segundos" : "milisegundos";

      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}: ${(t2 - t1) / divisor} ${unidade}`);
      retorno;
    };
    return descriptor;
  };
}
