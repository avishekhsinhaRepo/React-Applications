const CommentDetail = (props) => {
  return (
    <div className="ui container comments ">
    <div className="comment">
      <a className="avatar" href="/ss.html">
        <img src={props.avatar} alt="profile" />
      </a>
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="text">{props.comment}</div>
      </div>
    </div>
    </div>
  );
};

export default CommentDetail;
