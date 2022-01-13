import { useEffect, useState } from 'react'
import Link from 'next/link'

import { ClubApi } from '@api/ClubApi'
import { IMG_URI } from '@config/baseURI'
import { useLoading } from '@context/Loading'
import { useToken } from '@context/Token'
import { getRandomNumber } from '@utils/functions'

import { Club as ClubType } from '@interface/Club'

import * as cs from '../common.styled'
import * as s from './styled'

const Club = () => {
  const { token } = useToken()
  const { isLoading } = useLoading()

  const [clubs, setClubs] = useState<ClubType[]>([])

  const list: Array<ClubType> = clubs || Array(3).fill(null)
  const pickedNum = getRandomNumber(0, list.length - 1, 3)
  const pickedClub = pickedNum.map((num, idx) => (idx < 3 ? list[num] : null))

  useEffect(() => {
    if (!token) return

    ClubApi.query().then(({ data: { data } }) => {
      setClubs(data)
    })
  }, [token])

  return !isLoading ? (
    <cs.MainSection>
      <cs.IconTitle pathname="/clubs" title="동아리" />
      <s.Clubs>
        {pickedClub.map(
          (club, idx) =>
            club && (
              <Link href={`/clubs?currentId=${club.id}`} key={club.name || idx}>
                <s.ClubItem url={`${IMG_URI}/${club.images[0]}`}>
                  <s.Name>{club?.name}</s.Name>
                </s.ClubItem>
              </Link>
            ),
        )}
      </s.Clubs>
    </cs.MainSection>
  ) : null
}

export default Club
