import { box, color, shadow } from '@constants/theme'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: ${box.marginWidth};
  margin: ${box.margin};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ShortcutItem = styled.span`
  min-width: 70px;
  width: 22vw;
  max-width: 220px;
  height: 36px;
  border-radius: ${box.borderRadius};
  box-shadow: ${shadow.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
  color: ${color.black};
`
