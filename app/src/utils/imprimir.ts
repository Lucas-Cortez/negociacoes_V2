// import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...obj: Imprimivel[]): void {
  obj.forEach((el) => {
    console.log(el.paraTexto());
  });
}
