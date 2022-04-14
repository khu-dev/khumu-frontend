import styled from '@emotion/styled'
import { box, color } from '@constants/theme'

interface ContainerProps {
  top?: number
}

export const OuterContainer = styled.div<ContainerProps>`
  width: 100vw;
  height: auto;
`

export const SearchLabel = styled.div<ContainerProps>`
  height: 48px;
  width: calc(100% - 48px);
  margin: 14px auto;
  margin-top: 4px;
  padding: 0 10px;
  background-color: ${color.white};
  border-radius: ${box.borderRadius02};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchForm = styled.div`
  height: calc(100% - 16px);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const DecorationSpan = styled.span`
  width: 4px;
  height: 22px;
  background-color: ${color.gray5};
`

export const TextInput = styled.input`
  flex-grow: 1;
  width: 70%;
  height: 40px;
  padding: 0 8px;
  margin-left: 4px;
  font-size: 15px;
  border: none;
  border-radius: ${box.borderRadius};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${color.gray5};
  }
`
