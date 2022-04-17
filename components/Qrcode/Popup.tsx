import { useRouter } from 'next/router'
import styled from '@emotion/styled'

import { color } from '@constants/theme'
import { usePopup } from '@context/Popup'

import Img from 'assets/images/khumu_profile_01.png'

const Popup = () => {
  const router = useRouter()
  const { handleClose } = usePopup()

  return (
    <Container>
      <p>등록되지 않은 사용자는</p>
      <p>이용하실 수 없습니다.</p>
      <button
        onClick={() => {
          handleClose()
          router.back()
        }}
      >
        뒤로가기
      </button>
    </Container>
  )
}

export default Popup

const Container = styled.section`
  background-color: ${color.main};
  width: 289px;
  height: 111px;
  padding: 16px 0;
  border-radius: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &::before {
    content: ' ';
    display: block;
    width: 100px;
    height: 100px;
    background: url(${Img.src}) 0 0 no-repeat;
    background-size: 90px;
    background-position: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -65%);
  }

  p {
    color: ${color.white};
    font-weight: 700;
    font-size: 16px;
  }

  button {
    margin-top: 8px;
    padding: 4px 2px;
    color: ${color.white};
    background-color: ${color.transparency};
    border: none;
    border-bottom: 1px solid ${color.white};
    font-weight: 300;
    font-size: 12px;
    cursor: pointer;
  }
`
