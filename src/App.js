import { User } from 'components/User';
import { ProgressBar } from 'components/ProgressBar';
import { useCommentsState } from 'hooks/useCommentsState';

import db from 'db/db.json';

import './App.scss';

export const App = () => {
  const { comments, addComment } = useCommentsState(db.comments);
  return (
    <div className="container">
      <User
        name="Вероника Ростова"
        job="Менеджер по продажам"
        service="Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"
      />

      <ProgressBar />
    </div>
  );
};
