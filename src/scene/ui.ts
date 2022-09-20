import DeathCountDisplay from '@/components/DeathCountDisplay'
import { SCENE } from '@/constant/scene'
import { Scene } from 'phaser'

export default class UIScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: SCENE.UI, active: true })
  }

  create() {
    this.add.existing(new DeathCountDisplay({ scene: this }))
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta))
  }
}
