import React from 'react';

import Qrcode from '@views/Qrcode';
import QrcodeHeader from '@components/Header/Qrcode';

const QRcodePage = () => {
  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode />
    </>
  );
};

export default QRcodePage;
