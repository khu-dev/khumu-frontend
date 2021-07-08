import { useState } from 'react';

export const useSearchAreaFocus = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return { focus, handleFocus, handleBlur };
};
