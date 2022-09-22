export const filterDuplicate = (arr: any[], selector: (o: any) => any) =>
  arr.filter((item, i) => {
    const index = arr.findIndex((v) => selector(item) === selector(v))
    return index === i
  })
