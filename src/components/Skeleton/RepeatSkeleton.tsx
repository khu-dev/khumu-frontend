import React from 'react';

interface RepeatSkeletonProps {
  repeat: number;
  Skeleton: () => JSX.Element;
}

export default function RepeatSkeleton({
  repeat,
  Skeleton,
}: RepeatSkeletonProps) {
  const repeatArray = Array(repeat).fill(null);
  return (
    <>
      {repeatArray.map((_, idx: number) => (
        <Skeleton key={idx} />
      ))}
    </>
  );
}
