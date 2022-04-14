import { toTime } from '@utils/day'

import Send from './Send'

import profile from 'assets/images/khumu_profile_01.png'
import * as s from './Chat.styled'

const Chat = () => {
  return (
    <s.Container>
      <s.Section>
        <s.Box>
          <div>
            <s.Profile>
              <img src={profile.src} alt="" />
            </s.Profile>
            <s.Nickname>쿠뮤</s.Nickname>
          </div>
          <s.Content>
            <p>
              안녕하세요! 쿠뮤입니다. <br />
              피드백은 언제든지 환영이에요
            </p>
            <s.Time>{toTime.colon(Date.now())}</s.Time>
          </s.Content>
        </s.Box>
      </s.Section>
      <Send />
    </s.Container>
  )
}

export default Chat
