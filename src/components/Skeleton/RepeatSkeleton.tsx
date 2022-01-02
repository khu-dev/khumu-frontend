import React, { FC } from 'react'

interface Props {
  repeat: number
  Skeleton: () => JSX.Element
}

const RepeatSkeleton: FC<Props> = ({ repeat, Skeleton }) => {
  const repeatArray = Array(repeat).fill(null)

  return (
    <>
      {repeatArray.map((_, idx: number) => (
        <Skeleton key={idx} />
      ))}
    </>
  )
}

export default RepeatSkeleton
