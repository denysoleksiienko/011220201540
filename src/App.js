import { User } from 'components/User';

export const App = () => {
  return (
    <div className="container">
      <User
        name="Вероника Ростова"
        job="Менеджер по продажам"
        service="Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"
      />
    </div>
  );
};
