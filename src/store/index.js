import { createStore } from 'redux'
import reducer from '../reducer'
import articles from '../fixtures'

const store = createStore(reducer, {
    articles: articles
});
window.store = store
export default store;

