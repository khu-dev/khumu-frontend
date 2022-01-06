const getToken = () => {
  return (window as any)?.Android?.getToken()
}

export { getToken }
