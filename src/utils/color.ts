interface GetRandomRGBA {
  r?: number
  g?: number
  b?: number
  a?: number
}

export const getRandomRGBA = ({ r, g, b, a }: GetRandomRGBA) => {
  const o = Math.round
  const rand = Math.random
  const s = 255
  const red = r ? r : o(rand() * s)
  const green = g ? g : o(rand() * s)
  const blue = b ? b : o(rand() * s)
  const alpha = a ? a : rand().toFixed(1)
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}
