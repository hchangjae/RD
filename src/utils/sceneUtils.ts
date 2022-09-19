import { Scene } from 'phaser'

export const getWH = (scene: Scene) => [+scene.game.config.width, +scene.game.config.height]
