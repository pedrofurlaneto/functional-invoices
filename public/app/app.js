import { log } from './utils/promise-helpers.js'
import { notasService } from './services/nota-services.js'
import './utils/array-helpers.js'

document
.querySelector('#myButton')
.onclick = () => {
    notasService.sumItems('2143')
    .then(log)
    .catch(log);
}