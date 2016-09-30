import React, { Component } from 'react';

export default class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            //стоит завести отдельный компонент CommentList и вынести туда это состояние и половину логики
            isCommentsVisible: false
        };
    }


    render() {
        const
            { article } = this.props,

            { isOpen, isCommentsVisible } = this.state,

            commentsTextStyle = {
                color: 'blue',
                textDecoration: 'underline',
                cursor: 'pointer'
            },
            //лучше не писать столько кода в JSX - вынеси значение в переменную
            comments = isCommentsVisible ?
                <div>
                    {
                        article.comments ?
                        article.comments.map(comment =>
                            <section key={comment.id}>
                                <header><h4>{comment.user}</h4></header>
                                <div>{comment.text}</div>
                            </section>) : null
                    }
                </div> : null,

            body = isOpen ?
                <section>
                    {article.text}
                    <h3 onClick = {this.toggleComments.bind(this)}>
                        {
                            isCommentsVisible ? <p style={commentsTextStyle}>Close comments</p>
                                : <p style={commentsTextStyle}>Show comments</p>
                        }
                    </h3>
                    {comments}
                </section> : null;

        return (
            <div>
                <h2 onClick = {this.toggleOpen.bind(this)}>{article.title}</h2>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleComments = ev => {
        this.setState({
            isCommentsVisible: !this.state.isCommentsVisible
        });
    }
}
