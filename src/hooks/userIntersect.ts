import { useCallback, useEffect, useRef, useState } from 'react';

interface UseIntersect {
  threshold?: number;
  callback?(): void;
}

export const useIntersect = ({ threshold = 0.6, callback }: UseIntersect) => {
  const ref = useRef(null);
  const [showed, setShowed] = useState(false);

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      const currentRatio = entry.intersectionRatio;

      // Scrolling down/up
      !showed &&
        currentRatio > 0 &&
        (() => {
          setShowed(true);
          callback?.();
        })();
    },
    [showed],
  );

  useEffect(() => {
    const { current } = ref;
    let observer = null;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);
    }

    return () => observer?.disconnect();
  }, [handleScroll]);

  return { ref, showed };
};
