import { handleStatus, log } from "../utils/promise-helpers.js";
import { partialize, compose } from "../utils/operators.js";

const NOTAS_URL_API = "http://localhost:3000/notas";

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notasService = {
  list() {
    return fetch(NOTAS_URL_API)
        .then(handleStatus)
        .catch(err => {
            console.log(err);

            return Promise.reject('Não foi possível obter as notas fiscais');
        });
  },
  sumItems(code) {
    const filterItems = partialize(filterItemsByCode, code);
    const sumItems = compose(sumItemsValue, filterItems, getItemsFromNotas);

    return this.list()
        .then(sumItems)
  }
};
