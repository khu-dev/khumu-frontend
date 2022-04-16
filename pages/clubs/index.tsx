import React from 'react'

import Header from '@components/Header/Common'
import Clubs from '@components/Clubs'
import Categories from '@components/Clubs/Categories'

const ClubsPage = () => {
  return (
    <>
      <Header center="동아리" />
      <Categories />
      <Clubs />
    </>
  )
}

export default ClubsPage
