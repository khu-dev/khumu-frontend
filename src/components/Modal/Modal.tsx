import styled from '@emotion/styled';
import { box, color } from '@src/constants/theme';

const Modal = ({ children, isActive, handleCancel }) => {
  const handleHide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const elem = e.target as HTMLDivElement;
    const id = elem.id;

    if (id === 'modal--outer') {
      handleCancel();
    }
  };

  return (
    <Outer id="modal--outer" onClick={handleHide} isActive={isActive}>
      <Inner id="modal--inner">{children}</Inner>
    </Outer>
  );
};

export default Modal;

const Outer = styled.div<{ isActive: boolean }>`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  background-color: rgba(100, 100, 100, 0.4);
  width: 100vw;
  height: 100vh;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};

  transition: opacity 0.5s;
`;

const Inner = styled.div`
  position: absolute;
  width: auto;
  max-width: 90vw;
  height: auto;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color.white};
  border-radius: ${box.borderRadius};
  padding: ${box.padding};
`;
