import React, { Component, PropTypes } from 'react'

export default class NewArticleForm extends Component {
    state = {
        comment: ''
    };

    handleChange = ev => {
      if (ev.target.value.length > 0) {
          this.setState({
              comment: ev.target.value
          });
      }
    };

    submitCommentForm = ev => {
      ev.preventDefault();
      console.log(this.state);
    };

    render() {
        return (
            <form>
                new comment: <input type="text" value = {this.state.comment} onChange = {this.handleChange}/>
                <input type="submit" onClick={this.submitCommentForm} value='Отправить'/>
            </form>
        )
    }
}