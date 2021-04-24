/**
 * @description scroll hooks 사용하여 새 컴포넌트 반환
 *              메인에 사용됨
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollItemContainer } from '@components/main/items/items.styled';
import { ScrollAnimationProps } from '@interfaces/components';

export const ScrollAnimationItem = ({
  children,
  init,
  height,
  isAdvertise,
}: ScrollAnimationProps) => {
  const [showed, setShowed] = React.useState(false);
  const [_init, setInit] = React.useState(false);
  const ref = React.useRef<HTMLElement>();

  React.useEffect(() => {
    const element = ReactDOM.findDOMNode(ref.current) as HTMLElement;
    const rect = element.getBoundingClientRect() as ClientRect;
    (init?.isInit || window.scrollY + window.innerHeight / 2 > rect.top) &&
      setTimeout(() => {
        setInit(true);
      }, 450 * init.idx);
  }, []);

  const onScroll = () => {
    if (!showed && ref) {
      const element = ReactDOM.findDOMNode(ref.current) as HTMLElement;

      if (element) {
        const rect = element.getBoundingClientRect() as ClientRect;

        if (window.scrollY + window.innerHeight / 3 > rect.top) {
          !init?.isInit && setShowed(true);
          window.removeEventListener('scroll', onScroll);
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <ScrollItemContainer
      show={showed}
      ref={ref}
      init={_init}
      height={height}
      isAdvertise={isAdvertise}
    >
      {children}
    </ScrollItemContainer>
  );
};
