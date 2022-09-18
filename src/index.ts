import Phaser from 'phaser'
import create from './scene/create'
import preload from './scene/preload'
import update from './scene/update'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
}

new Phaser.Game(config)
