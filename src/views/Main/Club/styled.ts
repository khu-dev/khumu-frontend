import { box, color } from '@constants/theme'
import styled from '@emotion/styled'

export const Clubs = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ClubItem = styled.div<{ url: string }>`
  width: 82px;
  height: 82px;
  border: 1px solid ${color.main};
  border-radius: ${box.borderRadius};

  background-color: ${color.gray3};
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;

  overflow: hidden;
`

export const Name = styled.span`
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-weight: 700;
  color: ${color.white};
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);
`
