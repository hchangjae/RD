import { Scene } from 'phaser'

export const getWH = (scene: Scene) => [+scene.game.config.width, +scene.game.config.height]
export const getByType = (scene: Scene, type: any) => scene.children.list.filter((v) => v instanceof type)
