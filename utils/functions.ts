export const getRandomNumber = (
  min: number,
  max: number,
  count: number,
): number[] => {
  if (min === max) return [min]
  if (max - min < count) return [min, max]
  const picks: any = []

  for (let i = 0; i < count; i++) {
    const picked = Math.ceil(Math.random() * (max - min) + min)

    const exist = picks.find((num: number) => num === picked)
    if (exist) i--
    else picks.push(picked)
  }

  return picks
}
