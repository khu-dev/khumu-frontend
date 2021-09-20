import { useEffect, useState } from 'react';
import { accesskey } from '@config/_key';
import { TokenContext } from './TokenContext';
import { refreshToken } from 'src/module';

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || accesskey;

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    //@ts-ignore
    const token = window?.Android?.getToken() || devToken;
    refreshToken(token);
    setToken(token);
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
