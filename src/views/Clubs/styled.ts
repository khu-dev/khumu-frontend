import { box, color } from '@constants/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const tagStyle = css`
  width: auto;
  max-width: 60px;
  height: 29px;
  border-radius: 15px;
  padding: 1px 12px;
  margin: 4px auto;
  margin-bottom: 8px;
  text-align: center;
  line-height: 29px;
  font-size: 14px;
  font-weight: 500;
  color: ${color.white};
  background-color: ${color.main};
  position: relative;
`;

export const Tag = styled.div`
  ${tagStyle};
`;

export const Filters = styled.div`
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: auto;
  text-align: center;
  padding: 12px;
  background-color: ${color.gray4};

  z-index: 999;

  border: 1px solid ${color.main};
  border-radius: ${box.borderRadius};
`;

export const FilterItem = styled.div<{ isActive: boolean }>`
  ${tagStyle};
  display: inline-block;
  margin: 4px;
  border: 1px solid ${color.gray2};
  white-space: nowrap;

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${color.main};
          color: ${color.white};
        `
      : css`
          background-color: ${color.white};
          color: ${color.gray1};
        `}
`;

export const Nothing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${color.gray4};
`;

export const ClubsCard = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  width: 100vw;
  position: relative;
`;

export const Card = styled.div<{
  gap: number;
  idx: number;
  isMoving?: boolean;
  isEvent?: boolean;
}>`
  min-width: 260px;
  width: calc(100vw - 64px);
  height: 100%;
  box-shadow: -1px 1px 12px -4px rgba(0, 0, 0, 0.3);
  border: 1px solid ${color.main};
  border-radius: 24px;
  border-bottom-right-radius: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  ${({ idx }) => css`
    position: absolute;
    top: 0;
    left: calc((100vw - 48px) * ${idx} + 32px);
  `}
`;

export const Image = styled.div<{ url: string }>`
  flex: 1;
  background-color: ${color.gray4};
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  height: 178px;
  border-top: 1px solid ${color.gray4};
  padding: 16px;
  overflow-y: scroll;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
`;

export const Name = styled.h2`
  margin: 0;
  margin-right: 16px;
  color: ${color.main};
  white-space: nowrap;
`;

export const Summary = styled.span<{ fontSize: number }>`
  color: ${color.black};
  font-size: ${({ fontSize }) => fontSize};
`;

export const P = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: ${color.gray1};
`;

export const Paging = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const buttonStyle = css`
  font-size: 18px;
`;

export const disabledStyle = css`
  ${buttonStyle};
  color: ${color.gray4};
`;

export const enabledStyle = css`
  ${buttonStyle};
  color: ${color.main};
`;
