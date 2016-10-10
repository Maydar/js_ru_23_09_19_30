import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SelectFilter from '../components/SelectFilter';
import { filterArticles } from '../AC/articles'

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterArticlesAction: (selected) => {
            dispatch(filterArticles(selected))
        }
    }
};

const SelectFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilter);

export default  SelectFilterContainer;