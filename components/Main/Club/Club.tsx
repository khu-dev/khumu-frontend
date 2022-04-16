import { FC } from 'react'
import Link from 'next/link'

import { IMG_URI } from '@config/baseURI'
import { useLoading } from '@context/Loading'
import { getRandomNumber } from '@utils/functions'

import { Club as ClubType } from '@interface/Club'

import * as cs from '../common.styled'
import * as s from './styled'

const initialClubs = Array(3).fill({
  name: '',
  images: [''],
})

interface Props {
  clubs: ClubType[]
}

const Club: FC<Props> = ({ clubs }) => {
  const { isLoading } = useLoading()

  const pickedNum = getRandomNumber(0, clubs.length - 1, 3)
  const pickedClub = isLoading
    ? initialClubs
    : pickedNum.map((num, idx) => (idx < 3 ? clubs[num] : null))

  return (
    <cs.MainSection>
      <cs.IconTitle pathname="/clubs" title="동아리" isLoading={isLoading} />
      <s.Clubs>
        {pickedClub.map((club, idx) => (
          <Link
            href={isLoading ? '#' : `/clubs?clubId=${club.id}`}
            key={club.name || idx}
          >
            <s.ClubItem
              url={`${IMG_URI}/${club.images[0]}`}
              isLoading={isLoading}
            >
              <s.Name isLoading={isLoading}>{club?.name}</s.Name>
            </s.ClubItem>
          </Link>
        ))}
      </s.Clubs>
    </cs.MainSection>
  )
}

export default Club
