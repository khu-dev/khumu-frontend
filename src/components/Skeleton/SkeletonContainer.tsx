import React from 'react';

interface SkeletonContainerProps {
  isLoading: boolean;
  render: (props?: any) => JSX.Element;
  Skeleton: () => JSX.Element;
}

export default function SkeletonContainer({
  isLoading,
  render,
  Skeleton,
}: SkeletonContainerProps) {
  return isLoading ? <Skeleton /> : render();
}
