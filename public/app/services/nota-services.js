import { handleStatus } from "../utils/promise-helpers.js";
import { partialize } from "../utils/operators.js";

const NOTAS_URL_API = "http://localhost:3000/notas";

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.item);
const filterItemsByCode = (code, items) => items.filter(item => item.code === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

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
