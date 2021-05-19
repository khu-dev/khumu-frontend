import React from 'react';
import RepeatSkeleton from './RepeatSkeleton';

interface SkeletonContainerProps {
  isLoading: boolean;
  render: (props?: any) => JSX.Element;
  Skeleton: () => JSX.Element;
  repeat?: number;
}

export default function SkeletonContainer({
  isLoading,
  render,
  Skeleton,
  repeat = 1,
}: SkeletonContainerProps) {
  return isLoading ? <RepeatSkeleton repeat={repeat} Skeleton={Skeleton} /> : render();
}
