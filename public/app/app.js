import { log } from './utils/promise-helpers.js'
import { notasService } from './services/nota-services.js'
import { takeUntil } from './utils/operators.js'
import './utils/array-helpers.js'

const getSumInvoiceItems = takeUntil(3, () => 
    notasService.sumItems('2143')
    .then(log)
    .catch(log)
);

document
.querySelector('#myButton')
.onclick = getSumInvoiceItems