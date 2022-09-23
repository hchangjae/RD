import { Scene } from 'phaser'
import getSquarePath from '@/components/Road'
import WaveManager, { testWaveConfigList } from '@/components/WaveManager'
import { getWH } from '@/utils/sceneUtils'
import { GAME_SPEED } from '@/constant/game'
import { SCENE } from '@/constant/scene'
import RandomTower from '@/components/Tower/RandomTower'
import { TOWER_GRADE } from '@/constant/tower'

export default class MainScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: SCENE.MAIN, active: false })
  }

  async preload() {}

  create() {
    const [width, height] = getWH(this)

    this.add.existing(new RandomTower({ scene: this, grade: TOWER_GRADE.NORMAL }))
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
