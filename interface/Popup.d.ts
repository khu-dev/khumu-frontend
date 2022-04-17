import { ReactNode } from 'react'

interface Context {
  handleOpen(popup: ReactNode, option?: Option): void
  handleClose(): void
}

interface Option {
  notClosed?: boolean
}

export { Context, Option }
