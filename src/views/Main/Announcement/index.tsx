import { useState } from 'react'
// import { MdKeyboardArrowDown } from 'react-icons/md'
import { Announcement as AnnouncementType } from '@interface/Announcement'
import * as cs from '../common.styled'
import * as s from './styled'

const initialState = [
  { title: '총학생회', body: '2021-1 기말시험 안내', id: 0 },
  {
    title: '총학생회',
    body: '2021-1 코로나 관련 특별 장학금 지금 안내',
    id: 1,
  },
]

const Announcement = () => {
  const [announcements] = useState<AnnouncementType[]>(initialState)

  return (
    <cs.MainSection>
      <cs.IconTitle pathname="/announcements" title={'오늘의 공지사항'} />
      {announcements.map((announcement) => (
        <s.AnnouncementItem key={announcement.id}>
          {/* <s.AnnouncementThumbnail /> */}
          <s.AnnouncementBody>
            <s.Title>{announcement.title}</s.Title>
            <s.Content>{announcement.body}</s.Content>
            {/* <s.More>
              <MdKeyboardArrowDown size={24} />
            </s.More> */}
          </s.AnnouncementBody>
        </s.AnnouncementItem>
      ))}
    </cs.MainSection>
  )
}

export default Announcement
