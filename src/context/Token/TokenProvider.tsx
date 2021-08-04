import { useEffect, useState } from 'react';
import axios from 'axios';
import { accesskey } from '@config/_key';
import { TokenContext } from './TokenContext';

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || accesskey;

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
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
