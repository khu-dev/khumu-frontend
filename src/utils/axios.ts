export const headers = ({ token, ...rest }) => ({
  Authorization: `Bearer ${token}`,
  ...rest,
});
