import { createContext, useContext } from 'react'

export const initialValue = {
  token: null,
}

export const TokenContext = createContext(initialValue)

export const useToken = () => useContext(TokenContext)
