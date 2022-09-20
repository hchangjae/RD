import { Scene } from 'phaser'
import ATower from '@/components/Tower/normal/ATower'
import getSquarePath from '@/components/Road'
import WaveManager, { testWaveConfigList } from '@/components/WaveManager'
import { getWH } from '@/utils/sceneUtils'
import { GAME_SPEED } from '@/constant/game'
import { SCENE } from '@/constant/scene'

export default class MainScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: SCENE.MAIN, active: true })
  }

  create() {
    const [width, height] = getWH(this)

    this.add.existing(new ATower({ scene: this }))

    const road = getSquarePath(width, height)
    road.draw(this.add.graphics({ lineStyle: { width: 2, color: 0x550055 } }))

    this.add.existing(new WaveManager({ scene: this, path: road, waveConfigList: testWaveConfigList })).start()
    this.tweens.timeScale = GAME_SPEED

    // event
    this.input.on('drag', (pointer: any, gameObject: any, dragX: number, dragY: number) => {
      gameObject.x = dragX
      gameObject.y = dragY
    })
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta * GAME_SPEED))
  }
}
