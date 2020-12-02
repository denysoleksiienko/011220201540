import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useCommentsState = (initialValue) => {
  const [comments, setComments] = useState(initialValue);

  return {
    comments,
    addComment: (commentsText) => {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: uuidv4(),
          comment: commentsText,
          author: 'Anonymous',
          date: new Date().toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        },
      ]);
    },
  };
};
