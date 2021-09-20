//@ts-nocheck

export const AndroidToast = (text) => {
  const Android = typeof window !== undefined ? window?.Android : null;

  if (Android) Android?.showToast(text);
  else alert(text);
};
