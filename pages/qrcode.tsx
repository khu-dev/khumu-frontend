import React from 'react';

import Qrcode from '@views/Qrcode';
import QrcodeHeader from '@components/Header/Qrcode';
import { GetServerSideProps } from 'next';
import { fetchToken } from '@api/api-token';
import { fetchQRCode } from '@api/api-qrcode';
import { ID, PW } from '@config/key';

interface QRCodePageProps {
  qr_code_str: string;
  name: string;
  student_number: string;
  department: string;
}

export default function QRCodePage({
  qr_code_str,
  ...profile
}: QRCodePageProps) {
  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode qrcode={qr_code_str} profile={profile} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { access },
  }: any = await fetchToken({
    // username: 'username',
    username: ID,
    // password: 'password',
    password: PW,
  });

  const {
    data: { data },
  } = await fetchQRCode(access);

  return {
    props: data,
  };
};
