/**
 * @description scroll hooks 사용하여 새 컴포넌트 반환
 *              메인에 사용됨
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollItemContainer } from '../styles/container.styled';

interface props {
  children: React.ReactNode;
}

export const ScrollAnimationItem = ({ children }: props) => {
  const [showed, setShowed] = React.useState(false);

  const ref = React.useRef<HTMLElement>();

  const onScroll = () => {
    if (!showed && ref) {
      const element = ReactDOM.findDOMNode(ref.current) as HTMLElement;

      if (element) {
        const rect = element.getBoundingClientRect() as ClientRect;

        if (window.scrollY + window.innerHeight / 2 > rect.top) {
          setShowed(true);
          window.removeEventListener('scroll', onScroll);
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <ScrollItemContainer show={!showed} ref={ref}>
      {children}
    </ScrollItemContainer>
  );
};
