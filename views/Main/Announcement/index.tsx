import { useState } from 'react'
// import { MdKeyboardArrowDown } from 'react-icons/md'
import { Announcement as AnnouncementType } from '@interface/Announcement'
import * as cs from '../common.styled'
import * as s from './styled'
import { useLoading } from '@context/Loading'

const initialState = [
  { author: { author_name: '총학생회' }, title: '2021-1 기말시험 안내', id: 0 },
  {
    author: { author_name: '총학생회' },
    title: '2021-1 코로나 관련 특별 장학금 지금 안내',
    id: 1,
  },
]

const Announcement = () => {
  const { isLoading } = useLoading()
  const [announcements] = useState<AnnouncementType[]>(initialState)

  return (
    <cs.MainSection>
      <cs.IconTitle
        pathname="/announcements"
        title="오늘의 공지사항"
        isLoading={isLoading}
      />
      {announcements.map((announcement) => (
        <s.AnnouncementItem key={announcement.id}>
          {/* <s.AnnouncementThumbnail /> */}
          <s.AnnouncementBody isLoading={isLoading}>
            <s.Title isLoading={isLoading}>
              {announcement.author.author_name}
            </s.Title>
            <s.Content isLoading={isLoading}>{announcement.title}</s.Content>
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