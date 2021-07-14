import { FeedValueProps } from 'src/context/Main/type';
import { createContext, useContext } from 'react';

const initialValue = {
  feed: {
    name: '산업경영공학의이해',
    time: '1시간 45분',
  },
  dispatch: {
    updateFeed: (_: FeedValueProps) => {},
  },
};

export const MainContext = createContext(initialValue);

export const useMain = () => useContext(MainContext);
