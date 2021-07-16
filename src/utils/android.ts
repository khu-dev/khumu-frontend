//@ts-nocheck

export const AndroidToast = (text) => {
  const Android = window?.Android;

  if (Android) Android?.showToast(text);
  else alert(text);
};
