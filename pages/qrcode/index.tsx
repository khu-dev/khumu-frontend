import React, { useState } from 'react';

import Qrcode from '@views/Qrcode';
import QrcodeHeader from '@components/Header/Qrcode';
import { fetchQRCode } from '@api/api-qrcode';
import { QRcode } from '@interface/QRcode';

const initialState: QRcode = {
  qr_code_str: '',
  name: '',
  department: '',
  student_number: '',
};

interface Props {
  qrcode: QRcode;
}

export default function QRCodePage({ qrcode }: Props) {
  const [info, setInfo] = useState(qrcode);

  const fetchData = async () => {
    if (info.qr_code_str) setInfo(initialState);
    const { data } = await fetchQRCode.select();

    if (data) {
      const { data: info } = data;

      setInfo(info);
    }
  };

  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode
        qrcode={info.qr_code_str}
        profile={{
          name: info.name || '-',
          student_number: info.student_number || '-',
          department: info.department || '-',
        }}
        handleRefresh={fetchData}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await Promise.all([fetchQRCode.select()]);

  return {
    props: {
      qrcode: res[0].data?.data,
    },
  };
};
