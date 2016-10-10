import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filterArticlesAction: PropTypes.func.isRequired,
    };
    //тебе уже не нужен стейт, 2 источника правды всегда плохо. бери это из стора
    state = {
        selected: null
    }

    handleChange = selected => {
        this.props.filterArticlesAction(selected);
        this.setState({ selected })
    }

    render() {
        const { articles } = this.props
        const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default SelectFilter
