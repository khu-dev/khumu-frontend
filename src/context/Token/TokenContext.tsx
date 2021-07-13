import { createContext, useContext } from 'react';

export const initialValue = {
  token: '',
  setToken: (token) => console.log(token),
};

export const TokenContext = createContext(initialValue);

export const useToken = useContext(TokenContext);
