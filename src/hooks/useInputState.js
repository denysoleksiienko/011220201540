import { useState } from 'react';

export const useInputState = () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(''),
  };
};
