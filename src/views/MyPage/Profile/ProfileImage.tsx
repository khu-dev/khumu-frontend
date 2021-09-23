import styled from '@emotion/styled';
import { box, color } from '@constants/theme';

const sample = 'https://thispersondoesnotexist.com/image';

const Image = styled.img`
  width: 67.5px;
  height: 67.5px;
  border-radius: ${box.borderRadius};
  background-color: ${color.gray5};
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
