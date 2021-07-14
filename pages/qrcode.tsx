import React, { useState, useEffect } from 'react';

import Qrcode from '@views/Qrcode';
import QrcodeHeader from '@components/Header/Qrcode';
import { fetchQRCode } from '@api/api-qrcode';
import { useToken } from 'src/context/Token';

const initialState = {
  qrcode: '',
  profile: {
    name: '',
    student_number: '',
    department: '',
  },
};

export default function QRCodePage() {
  const { token } = useToken();
  const [info, setInfo] = useState(initialState);

  const fetchData = async () => {
    if (info.qrcode) setInfo(initialState);
    const { data } = await fetchQRCode();

    if (data) {
      const {
        data: { qr_code_str, ...profile },
      } = data;

      setInfo({
        qrcode: data.data.qr_code_str,
        profile,
      });
    }
  };

  useEffect(() => {
    token && fetchData();
  }, [token]);

  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode qrcode={info.qrcode} profile={info.profile} handleRefresh={fetchData} />
    </>
  );
}
