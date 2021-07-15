import React, { useEffect, useState } from 'react';
import { accesskey } from '@config/_key';
import { TokenContext } from './TokenContext';
import axios from 'axios';

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || accesskey;

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(null);
  console.log('token : ', token);

  useEffect(() => {
    console.log('token fetch');

    //@ts-ignore
    const getTokens = window?.Android?.getToken() || devToken;
    axios.defaults.headers.common['Authorization'] = `Bearer ${getTokens}`;
    setToken(getTokens);
  }, []);

  return (
    <TokenContext.Provider
      value={{
        token,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}