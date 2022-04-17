import React from 'react'

import { CommonHeader } from '@components/Common/Header'
import Clubs from '@components/Clubs'
import Categories from '@components/Clubs/Categories'

const ClubsPage = () => {
  return (
    <>
      <CommonHeader center="동아리" />
      <Categories />
      <Clubs />
    </>
  )
}

export default ClubsPage
