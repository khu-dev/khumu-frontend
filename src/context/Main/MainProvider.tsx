import React, { useState } from 'react';
import { MainContext } from './MainContext';
import { FeedValueProps } from './type';

interface ProviderProps {
  children: JSX.Element;
}

export default function MainContextProvider({ children }: ProviderProps) {
  const [value, setValue] = useState({
    feed: {
      name: '',
      time: '',
    },
  });

  const updateFeed = (feed: FeedValueProps) => {
    setValue({
      ...value,
      feed,
    });
  };

  return (
    <MainContext.Provider
      value={{
        ...value,
        dispatch: {
          updateFeed,
        },
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
