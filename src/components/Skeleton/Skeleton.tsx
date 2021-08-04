import React from 'react';
import RepeatSkeleton from './RepeatSkeleton';

interface SkeletonContainerProps {
  isLoading: boolean;
  render: (props?: any) => JSX.Element;
  Skeleton: () => JSX.Element;
  repeat?: number;
}

const SkeletonContainer = ({
  isLoading,
  render,
  Skeleton,
  repeat = 1,
}: SkeletonContainerProps) =>
  isLoading ? <RepeatSkeleton repeat={repeat} Skeleton={Skeleton} /> : render();

export default SkeletonContainer;
