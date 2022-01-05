import { Context } from '@interface/Loading'
import { createContext, useContext } from 'react'

const initialState: Context = {
  isLoading: true,
}

const LoadingContext = createContext<Context>(initialState)

const useLoading = () => useContext(LoadingContext)

export { LoadingContext, useLoading }
