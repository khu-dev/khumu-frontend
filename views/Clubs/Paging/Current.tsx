import { FC } from 'react'

interface Props {
  page: string
}

const Current: FC<Props> = ({ page }) => <span>{page}</span>

export default Current
