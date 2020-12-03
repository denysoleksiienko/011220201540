import './CommentsItem.scss';

export const CommentsItem = ({ comments }) => {
  return (
    <div className="comments__list">
      {comments.map(({ id, author, date, comment }) => (
        <div key={id} className="comments__list-item">
          <div className="comments__list-author">
            <span>{author}</span>
            <time>{date}</time>
          </div>
          <div className="comments__list-message">
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
