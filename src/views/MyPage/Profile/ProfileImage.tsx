import styled from '@emotion/styled';
import { box } from '@constants/theme';

const sample = 'https://avatars.githubusercontent.com/u/77267603?v=4';

const Image = styled.img`
  width: 18vw;
  height: 18vw;
  border-radius: ${box.borderRadius};
`;

export default function ProfileImage({ src }: { src: string }) {
  return (
    <Image
      src={src || sample}
      alt={'profile-image'}
      width={'100%'}
      height={'100%'}
    />
  );
}
