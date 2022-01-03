interface Context {
  isLoading: boolean
  handleLoadingStart?(): void
  handleLoadingEnd?(): void
}

export { Context }
