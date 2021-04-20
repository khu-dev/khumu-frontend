import { AppProps } from 'next/dist/next-server/lib/router/router';

interface RouterType {
  pathname: string;
}

export interface HeaderType {
  pathname: string;
}

export interface AppType extends AppProps {}
