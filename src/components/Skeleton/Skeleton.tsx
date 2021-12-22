import React from 'react'
import RepeatSkeleton from './RepeatSkeleton'

interface Props {
  isLoading: boolean
  render: (props?: any) => JSX.Element
  Skeleton: () => JSX.Element
  repeat?: number
}

const SkeletonContainer = ({
  isLoading,
  render,
  Skeleton,
  repeat = 1,
}: Props) =>
  isLoading ? <RepeatSkeleton repeat={repeat} Skeleton={Skeleton} /> : render()

export default SkeletonContainer
