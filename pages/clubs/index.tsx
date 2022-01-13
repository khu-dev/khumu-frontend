import React, { useEffect, useState } from 'react'

import { Club } from '@interface/Club'

import { ClubApi } from '@api/ClubApi'
import { useToken } from '@context/Token'

import Header from '@components/Header/Common'
import Clubs from '@components/Clubs'

const initialClub: Club = {
  categories: '',
  description: '',
  email: '',
  facebook: '',
  homepage: '',
  id: 0,
  images: [''],
  instagram: '',
  like_count: 0,
  liked: false,
  name: '',
  phone: '',
  recommended: false,
  summary: '',
}

interface Data {
  clubs: Club[]
  categories: string[]
}

const ClubsPage = () => {
  const { token } = useToken()
  const [data, setData] = useState<Data>({
    clubs: [initialClub, initialClub, initialClub, initialClub],
    categories: ['전체'],
  })

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await Promise.all([ClubApi.query(), ClubApi.categories()])

      if (res[0].status === 200) {
        setData({
          clubs: res[0].data?.data,
          categories: res[1].data?.data,
        })
      }
    }

    fetchData()
  }, [token])

  const { clubs, categories } = data

  return (
    <>
      <Header center="동아리" />
      <Clubs categories={categories} clubs={clubs} />
    </>
  )
}

export default ClubsPage
