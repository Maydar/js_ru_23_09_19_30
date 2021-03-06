import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import toggleOpen from './../decorators/toggleOpen'

function CommentList(props) {
    const { comments, isOpen, toggleOpen } = props
    if (!comments || !comments.length) return <div><p>No comments yet</p><NewCommentForm /></div>

    const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
    const body = isOpen && <div><ul>{commentItems}</ul><NewCommentForm /></div>

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{text}</a>
            {body}
            <NewCommentForm />
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //form toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

export default toggleOpen(CommentList)