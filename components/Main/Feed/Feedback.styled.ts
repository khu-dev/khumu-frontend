import styled from '@emotion/styled'
import { box, color } from '@constants/theme'

interface ContainerProps {
  top?: number
}

export const Container = styled.div<ContainerProps>`
  height: 48px;
  width: calc(100vw - 48px);
  margin: 14px auto;
  margin-top: 4px;
  padding: 0 10px;
  background-color: ${color.white};
  border-radius: ${box.borderRadius02};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Label = styled.label`
  height: calc(100% - 16px);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

export const Input = styled.span`
  flex-grow: 1;
  width: 70%;
  color: ${color.gray4};
  padding: 0 8px;
  margin-left: 4px;
  border: none;
  border-radius: ${box.borderRadius};
  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 22px;
    background-color: ${color.gray4};
  }
`
