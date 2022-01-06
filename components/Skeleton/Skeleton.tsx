import { FC } from 'react'

import RepeatSkeleton from './RepeatSkeleton'

interface Props {
  isLoading: boolean
  render: (props?: any) => JSX.Element
  Skeleton: () => JSX.Element
  repeat?: number
}

const SkeletonContainer: FC<Props> = ({
  isLoading,
  render,
  Skeleton,
  repeat = 1,
}) =>
  isLoading ? <RepeatSkeleton repeat={repeat} Skeleton={Skeleton} /> : render()

export default SkeletonContainer
