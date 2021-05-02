import Link from 'next/link';
import { AiOutlineBell, AiOutlineQrcode } from 'react-icons/ai';

import { theme } from '@components/utils/styles/theme';

const MainHeaderContent = () => (
  <>
    <Link href={'/qrcode'}>
      <AiOutlineQrcode
        size={theme.icon.fontSize}
        style={{ color: theme.color.white, marginRight: '12px' }}
      />
    </Link>
    <AiOutlineBell
      size={theme.icon.fontSize}
      style={{ color: theme.color.white }}
    />
  </>
);

export default MainHeaderContent;
