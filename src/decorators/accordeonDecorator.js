import React from 'react'

export default  function accordeonDecorator (Component) {
    return class WrapperComponent extends React.Component {
        state = {
            //Не привязывайся к названию сущности, декоратор будет использоваться везде. Назови, скажем, openItemId
            openArticleId: null
        };

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }


        toggleOpenArticle = id => ev => {
            //лучше один setState а там openArticleId: id === this.state.openArticleId ? null : id
            id === this.state.openArticleId ?
                this.setState({
                    openArticleId: null
                }) : this.setState({
                        openArticleId: id
                    })
        }
    }
}
