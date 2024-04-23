import { log } from './utils/promise-helpers.js'
import { notasService } from './services/nota-services.js'
import { takeUntil, debounceTime, partialize } from './utils/operators.js'
import './utils/array-helpers.js'

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)

const getSumInvoiceItems = operations(() => 
    notasService.sumItems('2143')
    .then(log)
    .catch(log)
);

document
.querySelector('#myButton')
.onclick = getSumInvoiceItems