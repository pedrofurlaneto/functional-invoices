import { handleStatus } from "../utils/promise-helpers.js";

const NOTAS_URL_API = "http://localhost:3000/notas";

const sumItems = (code) => (notas) =>
  notas
    .$flatMap((nota) => nota.itens)
    .filter((item) => item.codigo === code)
    .reduce((total, item) => total + item.valor, 0);

export const notasService = {
  list() {
    return fetch(NOTAS_URL_API).then(handleStatus);
  },
  sumItems(code) {
    return this.list().then(sumItems(code));
  },
};
