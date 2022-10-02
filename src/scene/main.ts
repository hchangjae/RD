import { Scene } from 'phaser'
import getSquarePath from '@/components/Road'
import WaveManager, { testWaveConfigList } from '@/components/WaveManager'
import { getWH } from '@/utils/sceneUtils'
import { GAME_SPEED } from '@/constant/game'
import { SCENE } from '@/constant/scene'
import TowerManager from '@/components/Tower/TowerManager'
import { TOWER_GRADE } from '@/constant/tower'

export default class MainScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: SCENE.MAIN, active: false })
  }

  async preload() {}

  create() {
    const [width, height] = getWH(this)

    const road = getSquarePath(width, height)
    road.draw(this.add.graphics({ lineStyle: { width: 2, color: 0x550055 } }))

    this.add.existing(new WaveManager({ scene: this, path: road, waveConfigList: testWaveConfigList })).start()

    const towerManager = new TowerManager({ scene: this })
    towerManager.addTower(1)
    this.add.existing(towerManager)

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
