import { FILTER_ARTICLES } from '../constants';
const _ = require('lodash');

export default (filters = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case FILTER_ARTICLES:
            return _.union(...filters, payload.filters);
    }
    return filters;
}