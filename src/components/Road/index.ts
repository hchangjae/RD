import { MAIN_HEIGHT, MAIN_WIDTH, PADDING } from '@/constant/ui'
import { Curves } from 'phaser'

let path: Curves.Path

const getSquarePath = (width: number, height: number) => {
  const [[x, y], ...points] = [
    [PADDING, PADDING],
    [PADDING, PADDING + MAIN_HEIGHT],
    [PADDING + MAIN_WIDTH, PADDING + MAIN_HEIGHT],
    [PADDING + MAIN_WIDTH, PADDING],
  ].map(([w, h]) => [w * width, h * width])

  path = new Curves.Path(x, y)

  points.forEach(([w, h]) => path.lineTo(w, h))

  path.closePath()

  return path
}

export default getSquarePath
