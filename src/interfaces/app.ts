interface RouterType {
  pathname: string
}

export type AppType {
  Component: React.FC;
  pageProps: any;
  router: RouterType
}