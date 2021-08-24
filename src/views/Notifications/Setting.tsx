import { box, color } from '@constants/theme';
import styled from '@emotion/styled';
import Link from 'next/link';

export const Setting = () => (
  <Container>
    <Link href={`/mypage/setting/notifications`}>
      <Button>알림설정</Button>
    </Link>
  </Container>
);

const Container = styled.div`
  width: ${box.paddingWidth};
  padding: ${box.padding};
  padding-top: 0;
  border-bottom: 1px solid ${color.gray6};
`;

const Button = styled.button`
  width: 75px;
  height: 23px;
  font-size: 12px;
  font-weight: 400;
  color: ${color.white};
  background-color: #01a08a;
  border: none;
  border-radius: 12px;
  float: right;
`;
