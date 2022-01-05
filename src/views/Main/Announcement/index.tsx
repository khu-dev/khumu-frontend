// import { MdKeyboardArrowDown } from 'react-icons/md'
import { FC } from 'react'
import { Announcement as AnnouncementType } from '@interface/Announcement'
import * as cs from '../common.styled'
import * as s from './styled'

interface Props {
  announcements?: AnnouncementType[]
}

const Announcement: FC<Props> = ({ announcements }) => {
  return (
    <cs.MainSection>
      {announcements && (
        <cs.IconTitle pathname="/announcements" title={'오늘의 공지사항'} />
      )}
      {announcements?.map((announcement) => (
        <s.AnnouncementItem key={announcement.id}>
          {/* <s.AnnouncementThumbnail /> */}
          <s.AnnouncementBody>
            <s.Title>{announcement.author.author_name}</s.Title>
            <s.Content>{announcement.title}</s.Content>
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
