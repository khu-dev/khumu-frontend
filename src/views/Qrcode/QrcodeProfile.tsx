import { css } from '@emotion/react';

interface ProfileRowProps {
  title: string;
  description: string;
}

function ProfileRow({ title, description }: ProfileRowProps) {
  const csses = useStyles();
  return (
    <div css={csses.row}>
      <h2 css={csses.title}>{title}&nbsp;&nbsp;&nbsp;|</h2>
      <span css={csses.description}>{description}</span>
    </div>
  );
}

export default function QrcodeProfile() {
  const csses = useStyles();
  return (
    <div css={csses.profile}>
      <ProfileRow title={'이름'} description={'가나다'} />
      <ProfileRow title={'학번'} description={'2020123193'} />
      <ProfileRow title={'학과'} description={'라마바사아자차'} />
    </div>
  );
}

const useStyles = () => ({
  profile: css`
    width: 230px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  row: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  title: css`
    font-size: 20px;
    font-weight: 400;
  `,
  description: css`
    font-size: 18px;
    font-weight: 400;
  `,
});
