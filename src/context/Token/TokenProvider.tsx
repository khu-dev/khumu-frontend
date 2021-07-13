import React, { useState } from 'react';
import { initialValue, TokenContext } from './TokenContext';

export default function TokenProvider({ children }) {
  const [value, setValue] = useState(initialValue);

  const setToken = (token) => {
    setValue({
      ...value,
      token,
    });
  };

  return (
    <TokenContext.Provider
      value={{
        token: value.token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
