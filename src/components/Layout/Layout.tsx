import React from 'react';
import Header from '@components/Header';
import { OuterContainer } from '@components/utils/styles/container.styled';
import { useRouter } from 'next/dist/client/router';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  return (
    <>
      <Header {...{ pathname }} />
      <OuterContainer>{children}</OuterContainer>
    </>
  );
};

export default Layout;
