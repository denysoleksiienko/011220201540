import { useInputState } from 'hooks/useInputState';

import './CommentsForm.scss';

export const CommentsForm = ({ saveComment }) => {
  const { value, reset, onChange } = useInputState();

  const onKeySubmit = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      saveComment(value);
      reset();
    }
  };

  return (
    <section className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          reset();
        }}
      >
        <textarea className="form__area" cols="60" value={value} onKeyDown={onKeySubmit} onChange={onChange} />
        <button className="form__btn-submit" type="submit" onClick={() => saveComment(value)}>
          Написать консультанту
        </button>
      </form>
    </section>
  );
};
