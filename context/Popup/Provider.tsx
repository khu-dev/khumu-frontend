import React, { FC, ReactNode, useCallback, useState } from 'react'

import { Option } from '@interface/Popup'

import { PopupContext } from './Context'

import styles from './Provider.module.scss'

interface Props {
  children: ReactNode
}

const PopupProvider: FC<Props> = ({ children }) => {
  const [popup, setPopup] = useState<ReactNode | null>(null)
  const [option, setOption] = useState<Option | null>(null)

  const handleOpen = useCallback((_popup: ReactNode, _option: Option) => {
    setPopup(_popup)
    setOption(_option)
  }, [])

  const handleClose = useCallback(() => {
    setPopup(null)
    setOption(null)
  }, [])

  return (
    <PopupContext.Provider
      value={{
        handleOpen,
        handleClose,
      }}
    >
      {popup && (
        <>
          <div
            className={styles.dimmed}
            onClick={() => {
              if (option?.notClosed) return

              handleClose()
            }}
          ></div>
          <div className={styles.popup}>{popup}</div>
        </>
      )}

      {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider
