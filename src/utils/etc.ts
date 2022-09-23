export const loadFont = (name: string, url: string) => {
  const newFont = new FontFace(name, `url(${url})`)
  return newFont
    .load()
    .then((loaded) => {
      return document.fonts.add(loaded)
    })
    .catch((error) => {
      return error
    })
}
