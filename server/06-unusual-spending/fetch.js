import {api} from './api';
import {prior, current} from './months';
const fetch = (userId) => {
    const priorMonth = prior();
    const currentMonth = current();
    return api(userId, priorMonth, currentMonth);;
} ;
export {fetch};
