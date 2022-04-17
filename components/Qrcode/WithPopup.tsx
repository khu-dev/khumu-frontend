import React, { FC, ReactNode, useEffect } from 'react'

import { usePopup } from '@context/Popup'

import Popup from './Popup'

interface Props {
  isError: boolean
  children: ReactNode
}

const WithPopup: FC<Props> = ({ isError, children }) => {
  const { handleOpen } = usePopup()

  useEffect(() => {
    if (!isError) return

    handleOpen(<Popup />, { notClosed: true })
  }, [isError, handleOpen])

  return <>{children}</>
}

export default WithPopup
