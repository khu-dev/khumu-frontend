/**
 * @description 스크롤 애니메이션을 위한 hooks
 */

import React from 'react';

export const useScrollEvent = (
  element: React.MutableRefObject<HTMLElement>,
) => {
  const [dimensions, setDimensions] = React.useState<ClientRect | null>(null);
  const [showed, setShowed] = React.useState(false);

  const ref = React.useCallback((domNode: HTMLElement | null) => {
    if (domNode) {
      setDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  const onScroll = () => {
    if (dimensions && !showed) {
      if (Math.abs(window.innerHeight - dimensions.top) < window.scrollY) {
        element.current.className += ' show';

        setShowed(true);
        window.removeEventListener('scroll', onScroll);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return { showed, ref };
};
