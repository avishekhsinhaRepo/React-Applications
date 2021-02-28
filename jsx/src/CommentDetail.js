import React from 'react';


const CommentDetail = props => {
    return <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src="https://source.unsplash.com/random" />
        </a>
        <div className="content">
            <a className="author">{props.name}</a>
            <div className="metadata">
                <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">
                How artistic!
</div>
            <div className="actions">
                <a className="reply">Reply</a>
            </div>
        </div>
    </div>;
}
export default CommentDetail;
