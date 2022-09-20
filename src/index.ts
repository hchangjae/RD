import MainScene from '@/scene/main'
import UIScene from '@/scene/ui'
import Phaser from 'phaser'

const width = Math.min(window.innerWidth, window.innerHeight, 700) * 0.8

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: width,
  height: width,
  scene: [MainScene, UIScene],
}

new Phaser.Game(config)
