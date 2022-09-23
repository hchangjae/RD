import LoadScene from '@/scene/load'
import MainScene from '@/scene/main'
import UIScene from '@/scene/ui'
import Phaser from 'phaser'

// @ts-ignore
import AwaitLoaderPlugin from 'phaser3-rex-plugins/plugins/awaitloader-plugin.js'

const width = Math.min(window.innerWidth, window.innerHeight, 700) * 0.8

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: width,
  height: width,
  scene: [LoadScene, MainScene, UIScene],
  plugins: {
    global: [
      {
        key: 'rexAwaitLoader',
        plugin: AwaitLoaderPlugin,
        start: true,
      },
    ],
  },
}

new Phaser.Game(config)
