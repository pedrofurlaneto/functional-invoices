import { log, timeoutPromise, delay } from './utils/promise-helpers.js'
import { notasService } from './services/nota-services.js'
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js'
import './utils/array-helpers.js'

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)

const getSumInvoiceItems = operations(() => 
    timeoutPromise(200, notasService.sumItems('2143'))
    .then(delay(5000))
    .then(log)
    .catch(log)
);

document
.querySelector('#myButton')
.onclick = getSumInvoiceItems