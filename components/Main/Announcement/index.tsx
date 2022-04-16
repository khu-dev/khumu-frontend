import { FC } from 'react'
// import { MdKeyboardArrowDown } from 'react-icons/md'
import { Announcement as AnnouncementType } from '@interface/Announcement'
import * as cs from '../common.styled'
import * as s from './styled'
import { useLoading } from '@context/Loading'

const initialState: AnnouncementType[] = [
  { author: { author_name: '' }, title: '', id: 0, sub_link: '#' },
]

interface Props {
  announcements: AnnouncementType[]
}

const Announcement: FC<Props> = ({ announcements }) => {
  const { isLoading } = useLoading()

  const _announcements = isLoading ? initialState : announcements

  return (
    <cs.MainSection>
      <cs.IconTitle
        pathname="/announcements"
        title="오늘의 공지사항"
        isLoading={isLoading}
      />
      {_announcements.map((announcement) => (
        <s.Announcement key={announcement.id} href={announcement.sub_link}>
          <s.Body isLoading={isLoading}>
            <s.Title isLoading={isLoading}>
              {announcement.author.author_name}
            </s.Title>
            <s.Content isLoading={isLoading}>{announcement.title}</s.Content>
            {/* <s.More>
            <MdKeyboardArrowDown size={24} />
          </s.More> */}
          </s.Body>
        </s.Announcement>
      ))}
    </cs.MainSection>
  )
}

export default Announcement
