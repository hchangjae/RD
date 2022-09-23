import DeathCountDisplay from '@/components/Display/DeathCount'
import RoundDisplay from '@/components/Display/Round'
import TimeDisplay from '@/components/Display/Time'
import { SCENE } from '@/constant/scene'
import { Scene } from 'phaser'

export default class UIScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: SCENE.UI, active: true })
  }

  create() {
    this.add.existing(new DeathCountDisplay({ scene: this }))
    this.add.existing(new TimeDisplay({ scene: this }))
    this.add.existing(new RoundDisplay({ scene: this }))
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta))
  }
}
