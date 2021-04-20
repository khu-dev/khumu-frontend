/**
 * @description 스크롤 애니메이션을 위한 hooks
 */

import React from 'react';

export const useScrollEvent = () => {
  const [dimensions, setDimensions] = React.useState<ClientRect | null>(null);
  const [init, setInit] = React.useState(true);

  const ref = React.useCallback((domNode: HTMLElement) => {
    if (domNode) {
      setDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  const onScroll2 = () => {
    console.log('zzzz');
  };

  const onScroll = () => {
    if (dimensions && init) {
      if (Math.abs(window.innerHeight - dimensions.top) < window.scrollY) {
        console.log(window.innerHeight - dimensions.top, '!!');
        setInit(false);
        window.removeEventListener('scroll', onScroll);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll2);

    return () => window.removeEventListener('scroll', onScroll2);
  });

  return {
    ref,
  };
};
