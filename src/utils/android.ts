export const AndroidToast = (text) => {
  //@ts-ignore
  window?.Android?.showToast(text) || alert(text);
};
