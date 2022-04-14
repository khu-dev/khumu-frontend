import { color } from '@constants/theme'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: calc(100% - 32px);
  height: calc(100vh - 64px);
  padding: 0 16px;
  position: relative;
  background-color: rgba(255, 77, 62, 0.05);
`

export const Section = styled.section`
  height: calc(100% - 20px);
`

export const Box = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 0 65px 0 40px;
`

export const Profile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 4em;
  text-align: center;
  overflow: hidden;
  background: url(/assets/images/profile.png) 0 0 no-repeat;
  background-size: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Nickname = styled.strong`
  display: block;
  line-height: 17px;
  font-size: 12px;
  font-weight: 600;
  color: ${color.main};
`

export const Content = styled.span`
  position: relative;
  float: left;
  display: block;
  max-width: 320px;

  p {
    display: inline-block;
    margin-top: 6px;
    padding: 10px;
    background: ${color.main};
    border-radius: 0 20px 20px 20px;
    line-height: 20px;
    word-break: break-all;
    color: white;
    font-weight: 300;
  }
`

export const Time = styled.i`
  position: absolute;
  right: -56px;
  bottom: 0;
  display: block;
  width: 50px;
  line-height: 14px;
  font-size: 10px;
  font-style: normal;
  color: #999;
`
