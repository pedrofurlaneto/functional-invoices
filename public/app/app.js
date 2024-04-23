import { log, timeoutPromise, retry } from './utils/promise-helpers.js'
import { notasService } from './services/nota-services.js'
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js'

import './utils/array-helpers.js'
import { EventEmmiter } from './utils/event-emmiter.js'

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)

const getSumInvoiceItems = operations(() => 
    retry(3, 3000, () => timeoutPromise(200, notasService.sumItems('2143')))
    .then(total => EventEmmiter.emit('itemsSum', total))
    .catch(log)
);

document
.querySelector('#myButton')
.onclick = getSumInvoiceItems