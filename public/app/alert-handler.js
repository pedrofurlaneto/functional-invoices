import { EventEmmiter } from './utils/event-emmiter.js';

EventEmmiter.on('itemsSum', total => alert(`Soma total dos valores da nota fiscal: ${total}`));