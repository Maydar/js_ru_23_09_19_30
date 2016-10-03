import React from 'react'

export default  function accordeonDecorator (Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        };

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }


        toggleOpenArticle = id => ev => {
            id === this.state.openArticleId ?
                this.setState({
                    openArticleId: null
                }) : this.setState({
                        openArticleId: id
                    })
        }
    }
}