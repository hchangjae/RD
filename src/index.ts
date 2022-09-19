import Phaser from 'phaser'
import MainScene from './scene/main'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainScene],
}

new Phaser.Game(config)
