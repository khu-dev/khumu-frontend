import { InputContext as ContextType } from '@interface/Feed'
import { createContext, useContext } from 'react'

const initialState = {
  focus: false,
  handler: {
    handleBlur: () => {},
    handleFocus: () => {},
    handleSubmit: () => {},
  },
}

export const InputContext = createContext<ContextType>(initialState)

export const useFeedInput = () => useContext(InputContext)
