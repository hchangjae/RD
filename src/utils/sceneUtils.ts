import { GameObjects, Scene } from 'phaser'

export const getWH = (scene: Scene) => [+scene.game.config.width, +scene.game.config.height]
export const getByType = <T extends abstract new (...args: any) => any>(scene: Scene, type: T) =>
  scene.children.list.filter((v) => v instanceof type) as InstanceType<T>[]
