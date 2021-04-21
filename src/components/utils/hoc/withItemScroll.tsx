/**
 * @description scroll hooks 사용하여 새 컴포넌트 반환
 *              메인에 사용됨
 */

import React from 'react';
// import { useScrollEvent } from '@components/utils/hooks/useScrollEvent';
import { ItemContainer } from '../styles/container.styled';

interface props {
  children: React.ReactNode;
}

export const ScrollAnimationItem = ({ children }: props) => {
  const [dimensions, setDimensions] = React.useState<HTMLElement | null>(null);
  const [showed, setShowed] = React.useState(false);

  const ref = React.useCallback((domNode: HTMLElement | null) => {
    if (domNode) {
      setDimensions(domNode);
    }
  }, []);

  // const ref = React.useRef(null);

  const onScroll = () => {
    if (dimensions && !showed && ref) {
      const rect = dimensions.getBoundingClientRect();
      console.log(rect, window.scrollY, innerHeight);
      if (Math.abs(window.innerHeight - rect.top) < window.scrollY) {
        dimensions.className += ' show';

        setShowed(true);
        window.removeEventListener('scroll', onScroll);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <ItemContainer show={showed} ref={ref}>
      {children}
    </ItemContainer>
  );
};
