import { createContext, useContext } from 'react';

export const initialState = {
  focus: false,
  handler: {
    handleBlur: () => {},
    handleFocus: () => {},
  },
};

export const FeedInputContext = createContext(initialState);

export const useFeedInput = () => useContext(FeedInputContext);
