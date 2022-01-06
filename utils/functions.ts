export const getRandomNumber = (min: number, max: number, count: number) => {
  const picks: any = []

  for (let i = 0; i < count; i++) {
    let picked = Math.ceil(Math.random() * (max - min) + min)

    const exist = picks.find((num: any) => num === picked)
    if (exist) picked < max ? picked++ : picked--

    picks.push(picked)
  }

  return picks
}
