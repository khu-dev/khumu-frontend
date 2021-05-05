//@ts-nocheck

/**
 * @description scroll hooks 사용하여 새 컴포넌트 반환
 *              메인에 사용됨
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollItemContainer } from '@components/Main/items/itemsStyled';
import { ScrollAnimationProps } from '@interfaces/components';

export const ScrollAnimationItem = ({
  children,
  init: _init,
  height,
  isAdvertise,
}: ScrollAnimationProps) => {
  const [show, setShow] = React.useState(false);
  const [init, setInit] = React.useState(false);
  const ref = React.useRef<HTMLElement>();

  const onScroll = () => {
    if (!show && ref) {
      const element = ReactDOM.findDOMNode(ref.current) as HTMLElement;

      if (element) {
        const rect = element.getBoundingClientRect() as ClientRect;

        if (window.scrollY + window.innerHeight / 3 > rect.top) {
          !_init?.isInit && setShow(true);
          window.removeEventListener('scroll', onScroll);
        }
      }
    }
  };

  React.useEffect(() => {
    const element = ReactDOM.findDOMNode(ref.current) as HTMLElement;
    const rect = element.getBoundingClientRect() as ClientRect;
    (_init?.isInit || window.scrollY + window.innerHeight / 2 > rect.top) &&
      setTimeout(() => {
        setInit(true);
      }, 450 * _init.idx);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <ScrollItemContainer {...{ ref, isAdvertise, height, show, init }}>
      {children}
    </ScrollItemContainer>
  );
};
