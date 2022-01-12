import { CustomTitle } from '@components/Title'
import { css } from '@emotion/react'

interface MyTitleProps {
  title: string
}

export const MyTitle = ({ title, ...rest }: MyTitleProps) => (
  <CustomTitle
    size={20}
    css={css`
      color: #1cac98;
    `}
    {...rest}
  >
    {title}
  </CustomTitle>
)
