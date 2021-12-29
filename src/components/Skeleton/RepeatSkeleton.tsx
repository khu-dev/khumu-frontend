//@ts-nocheck

import React from 'react'

interface Props {
  repeat: number
  Skeleton: () => JSX.Element
}

export default function RepeatSkeleton({ repeat, Skeleton }: Props) {
  const repeatArray = Array(repeat).fill(null)
  return (
    <>
      {repeatArray.map((_, idx: number) => (
        <Skeleton key={idx} />
      ))}
    </>
  )
}
