import { PROGRESS } from './progressBar.module';

import './ProgressBar.scss';

export const ProgressBar = () => {
  const totalCount = PROGRESS.reduce((total, obj) => obj.count + total, 0);

  return (
    <section className="progress">
      <div className="progress__inner">
        <div className="progress__header">
          <span>Услуг</span>
        </div>
        <ul className="progress__list">
          {PROGRESS.map((item) => (
            <li className="progress__list-item" key={item.id}>
              <div className="progress__container">
                <span
                  className="progress__bar"
                  style={{
                    width: item.completed,
                    borderLeft: item.border,
                    background: item.bgcolor,
                    borderRadius: '0px 3px 3px 0px',
                  }}
                ></span>
                <span className="progress__text">{item.text}</span>
              </div>
              <span className="progress__count">{item.count}</span>
            </li>
          ))}
        </ul>
        <div className="progress__footer">
          <span>Всего</span>
          <span id="progress__total">{totalCount}</span>
        </div>
      </div>
    </section>
  );
};
