import React from 'react';
import Header from '@components/header';
import { OuterContainer } from '@components/utils/styles/container.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <OuterContainer>{children}</OuterContainer>
  </>
);

export default Layout;
