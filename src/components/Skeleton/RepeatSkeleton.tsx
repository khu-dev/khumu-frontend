import React from 'react';

interface RepeatSkeletonProps {
  repeat: number;
  Skeleton: () => JSX.Element;
}

export default function RepeatSkeleton({ repeat, Skeleton }: RepeatSkeletonProps) {
  return (
    <>
      {Array(repeat)
        .fill(null)
        .map((_, idx: number) => (
          <Skeleton key={idx} />
        ))}
    </>
  );
}
