export const filterDuplicate = <T extends unknown>(arr: T[], selector: (o: T) => any) =>
  arr
    .filter((item, i) => {
      const index = arr.findIndex((v) => selector(item) === selector(v))
      return index === i
    })
    .filter((v) => v)

export const getRandomItem = <T extends unknown>(arr: T[]) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
