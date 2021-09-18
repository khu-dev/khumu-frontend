export const getFontSize = (textLength: number) => {
  const baseSize = 22;
  if (textLength >= baseSize) {
    textLength = baseSize - 2;
  }
  const fontSize = baseSize - textLength;
  return `${fontSize}px`;
};
