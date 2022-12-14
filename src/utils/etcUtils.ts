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

export const getFPS = () =>
  new Promise<number>((resolve) => requestAnimationFrame((t1) => requestAnimationFrame((t2) => resolve(1000 / (t2 - t1)))))
