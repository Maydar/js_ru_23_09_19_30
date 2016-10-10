import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}


export function filterArticles(articles) {
    return {
        type: FILTER_ARTICLES,
        payload: {
            filters: articles
        }
    }

}