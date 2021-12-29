export const headers = ({ token, ...rest }: any) => ({
  Authorization: `Bearer ${token}`,
  ...rest,
})
