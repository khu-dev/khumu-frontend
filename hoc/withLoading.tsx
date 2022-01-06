import { LoadingProvider } from '@context/Loading'

const withLoading = (Component: () => JSX.Element) => {
  return function WithLoading() {
    return (
      <LoadingProvider>
        <Component />
      </LoadingProvider>
    )
  }
}

export default withLoading
