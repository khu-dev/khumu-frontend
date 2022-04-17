import { createContext, useContext } from 'react'
import { Context } from '@interface/Popup'

const initialState: Context = {
  handleOpen: () => {},
  handleClose: () => {},
}

const PopupContext = createContext<Context>(initialState)

const usePopup = () => useContext(PopupContext)

export { PopupContext, usePopup }
