import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import NewArticleForm from './NewArticleForm'
import SelectFilterContainer from '../containers/SelectFilterContainer'
import Counter from './Counter'

class Container extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <Counter />
                <SelectFilterContainer />
                <ArticleList />
                <Chart />
                <NewArticleForm />
            </div>
        )
    }
}

export default Container