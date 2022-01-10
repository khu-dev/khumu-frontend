export const AndroidToast = (text: string) => {
  const Android = typeof window !== undefined ? (window as any)?.Android : null

  if (Android) Android?.showToast(text)
  else alert(text)
}
