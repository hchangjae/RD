export const randomWithPadding = (padding: number) => Math.random() * (1 - padding * 2) + padding
export const isInCircle = (originX: number, originY: number, x: number, y: number, radius: number) =>
  Math.pow(x - originX, 2) + Math.pow(y - originY, 2) < Math.pow(radius, 2)
