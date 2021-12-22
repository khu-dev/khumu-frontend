//@ts-nocheck

import React from 'react'
import AppStyleTag from './App'
import HeaderStyleTag from './Header'
import MainStyleTag from './Main'
import SkeletonStyleTag from './Skeleton'

export default function StyleTag() {
  return (
    <>
      <AppStyleTag />
      <HeaderStyleTag />
      <MainStyleTag />
      <SkeletonStyleTag />
    </>
  )
}
