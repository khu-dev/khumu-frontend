interface InputContext {
  focus: boolean
  handler: InputContextHandler
}

interface InputContextHandler {
  handleBlur(): void
  handleFocus(): void
  handleSubmit(v: string): void
}

export { InputContext }
