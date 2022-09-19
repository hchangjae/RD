import { Scene } from 'phaser'
import ArrowTower from '@/components/Tower/ArrowTower'
import getSquarePath from '@/components/Road'
import WaveManager, { testWaveConfigList } from '@/components/WaveManager'
import { getWH } from '@/utils/sceneUtils'

export default class MainScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: 'MainScene', active: true })
  }

  create() {
    const [width, height] = getWH(this)

    this.add.existing(new ArrowTower({ scene: this }))

    const road = getSquarePath(width, height)
    road.draw(this.add.graphics({ lineStyle: { width: 2, color: 0x550055 } }))

    this.add.existing(new WaveManager({ scene: this, path: road, waveConfigList: testWaveConfigList })).start()
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta))
  }
}
