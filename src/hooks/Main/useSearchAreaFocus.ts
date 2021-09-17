import { fetchFeedbacks } from '@api/api-feedbacks';
import { AndroidToast } from '@utils/android';
import { useState } from 'react';

export const useSearchAreaFocus = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleSubmit = async (content: string) => {
    const res = await fetchFeedbacks.post({ content });
    console.log(res);
    AndroidToast('제출되었습니다');
    handleBlur();
  };

  return { focus, handleFocus, handleBlur, handleSubmit };
};
