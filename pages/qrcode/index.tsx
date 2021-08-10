import React, { useState, useEffect } from 'react';

import Qrcode from '@views/Qrcode';
import QrcodeHeader from '@components/Header/Qrcode';
import { fetchQRCode } from '@api/api-qrcode';
import { useToken } from '@context/Token';
import { useUser } from '@context/User';

const initialState = {
  qrcode: '',
  name: '',
};

export default function QRCodePage() {
  const { token } = useToken();
  const {
    info: { student_number, department },
  } = useUser();
  const [info, setInfo] = useState(initialState);

  const fetchData = async () => {
    if (info.qrcode) setInfo(initialState);
    const { data } = await fetchQRCode();

    if (data) {
      const {
        data: { qr_code_str, name },
      } = data;

      setInfo({
        qrcode: qr_code_str,
        name,
      });
    }
  };

  useEffect(() => {
    token && fetchData();
  }, [token]);

  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode
        qrcode={info.qrcode}
        profile={{
          name: info.name || '-',
          student_number,
          department,
        }}
        handleRefresh={fetchData}
      />
    </>
  );
}
