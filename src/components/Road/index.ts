import { Curves } from 'phaser'

let path: Curves.Path

const getSquarePath = (width: number, height: number) => {
  const [[x, y], ...points] = [
    [0.1, 0.1],
    [0.1, 0.9],
    [0.9, 0.9],
    [0.9, 0.1],
  ].map(([w, h]) => [w * width, h * height])

  path = new Curves.Path(x, y)

  points.forEach(([w, h]) => path.lineTo(w, h))

  path.closePath()

  return path
}

export default getSquarePath
