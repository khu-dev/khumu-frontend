import { css } from '@emotion/react';
import { MyBox } from '../Shared';

import Image from './ProfileImage';
import Info from './ProfileInfo';
import ReleaseButton from './ProfileReleaseButton';

const sample = 'https://avatars.githubusercontent.com/u/77267603?v=4';

const MyPageProfile = ({ name, department, studentNumber }) => (
  <MyBox
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  >
    <Image src={sample} />
    <Info name={name} department={department} studentNumber={studentNumber} />
    <ReleaseButton title={'나의 정보 변경'} />
  </MyBox>
);

export default MyPageProfile;
