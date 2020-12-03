import React from 'react';
import { CommentsItem } from 'components/CommentsItem/CommentsItem';

import like from 'assets/like.png';
import comment from 'assets/comment.png';

import './CommentsList.scss';

export const CommentsList = ({ comments }) => {
  const [likes, setLikes] = React.useState(131);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <section className="comments">
      <div className="comment__inner">
        <div className="comments__header">
          <div className="comments__reviews">
            <span>Последние отзывы</span>
            <span className="active">Все отзывы</span>
          </div>
          <div className="comments__counts">
            <div className="comments__counts-item" onClick={handleLike}>
              <img src={like} alt="likes" />
              <span>{likes}</span>
            </div>
            <div className="comments__counts-item">
              <img src={comment} alt="comment" />
              <span>{comments.length}</span>
            </div>
          </div>
        </div>
        <CommentsItem comments={comments} />
      </div>
    </section>
  );
};
