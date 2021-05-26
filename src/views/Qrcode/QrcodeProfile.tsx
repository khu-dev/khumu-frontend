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

export default function QrcodeProfile({
  profile: { name, student_number, department },
}: {
  profile: {
    name: string;
    student_number: string;
    department: string;
  };
}) {
  const csses = useStyles();
  return (
    <div css={csses.profile}>
      <ProfileRow title={'이름'} description={name} />
      <ProfileRow title={'학번'} description={student_number} />
      <ProfileRow title={'학과'} description={department} />
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
