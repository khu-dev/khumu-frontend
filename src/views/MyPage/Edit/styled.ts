import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { box, color } from '@constants/theme'

export const Container = styled.div`
  width: ${box.paddingWidth};
  flex-grow: 1;

  padding: ${box.padding};

  background-color: #e4e4e4;
`

export const Image = styled.div`
  width: 102px;
  height: 102px;
  margin: 0 auto;
  border-radius: ${box.borderRadius};
  background-color: #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Uploader = styled.input`
  width: 102px;
  height: 102px;
  border-radius: ${box.borderRadius};
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  background-color: green;
  opacity: 0;
`

export const Form = styled.form`
  width: 200px;
  margin: 28px auto;
`

export const FormTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  margin-left: ${box.borderRadius};
  margin-bottom: 4px;
`

export const formStyle = css`
  width: calc(100% - 32px);
  background-color: #4d4d4d;
  border: none;
  border-radius: ${box.borderRadius};
  color: ${color.gray4};
  padding: 9px 16px;
  font-size: 16px;
`

export const Input = styled.input`
  ${formStyle};
  color: ${color.gray6};

  &::placeholder {
    color: ${color.gray4};
  }

  &:focus {
    outline: none;
  }
`

export const Select = styled.select`
  ${formStyle};

  width: 100%;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  position: relative;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  display: block;
  padding: 8px 42px;
  margin: 64px auto;
  background-color: #01a08a;
  color: ${color.white};
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: ${box.borderRadius};
`
