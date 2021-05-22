import { css } from '@emotion/react';
import { Box } from '../Shared';

import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import ReleaseButton from './ProfileReleaseButton';

const sample = 'https://avatars.githubusercontent.com/u/77267603?v=4';

export default function MyPageProfile() {
  const handleRelease = () => {
    alert('해제!');
  };
  return (
    <Box
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <ProfileImage src={sample} />
      <ProfileInfo
        name={'가나다'}
        department={'가다라다공학과'}
        studentNumber={'2012239823'}
      />
      <ReleaseButton title={'연동 해제'} handleRelease={handleRelease} />
    </Box>
  );
}
