import { loadTowerModules } from '@/components/Tower/RandomTower'
import { SCENE } from '@/constant/scene'
import { loadFont } from '@/utils/etc'
import { Scene } from 'phaser'

export default class LoadScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: SCENE.LOAD, active: true })
  }

  async preload() {
    // @ts-ignore
    this.load.rexAwait(async (res, rej) => {
      await loadFont('phased', 'fonts/Phased.ttf')
      await loadTowerModules()
      res()
    })
  }

  create() {
    this.scene.start(SCENE.MAIN)
    this.scene.start(SCENE.UI)
    this.scene.remove(SCENE.LOAD)
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta))
  }
}
