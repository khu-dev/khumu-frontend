import { color } from '@constants/theme'
import styled from '@emotion/styled'

export const Container = styled.section`
  position: fixed;
  left: 0;
  bottom: 0;
  width: calc(100vw - 24px);
  height: 36px;
  padding: 12px;
`

export const Textarea = styled.input`
  outline: none;
  border: none;
  height: 14px;
  margin: 0;
  padding: 10px;
  width: calc(100% - 94px);
  border-radius: 4px;
  resize: none;
  border: 1px solid ${color.main};
`

export const Button = styled.a`
  float: right;
  height: 36px;
  width: 60px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: ${color.main};
  color: ${color.white};
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`
