import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'


const _ = require('lodash');

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired,
        filters: PropTypes.array.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen, filters } = this.props;
        const filterIds =  filters.map(filter => filter.value);
        const articleComponents =
            filterIds.length < 1 ?
                articles.map(article => (
                    <li key={article.id} >
                        <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
                    </li>
                )) :
                articles.map(article => {

                    //фильтрация статей по ID
                    let result = _.some(filterIds, (item) => article.id === item);

                    return result ?
                        <li key={article.id} >
                            <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
                        </li> : null;
                });

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(accordion(ArticleList))