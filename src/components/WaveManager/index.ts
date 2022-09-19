import { Curves, GameObjects, Scene } from 'phaser'
import Enemy from '../Enemy'
import Mob1 from '../Enemy/mob1'
import Mob2 from '../Enemy/mob2'
import { ConcreteEnemy } from '../Enemy/Type'
import Wave, { WaveProps } from './Wave'

type WaveConfig = {
  deathCount: number
  duration: number
  enemyType: ConcreteEnemy
  enemyCount: number
}

type WaveManagerProps = {
  scene: Scene
  path: Curves.Path
  waveConfigList: WaveConfig[]
}

export default class WaveManager extends GameObjects.Container {
  protected path: Curves.Path
  protected waveConfigList: WaveConfig[]
  protected now: Wave | null
  protected index: number

  constructor(props: WaveManagerProps) {
    const { scene, path, waveConfigList } = props

    super(scene)

    this.scene = scene
    this.path = path
    this.waveConfigList = waveConfigList
    this.now = null
    this.index = 0
  }

  start() {
    this.index = 0
    this.nextWave()
  }

  isLastWave() {
    return this.index === this.waveConfigList.length
  }

  isDone() {
    const enemyCount = this.scene.children.list.filter((v) => v instanceof Enemy).length
    return this.isLastWave() && enemyCount === 0 && this.now?.isDone()
  }

  nextWave() {
    if (this.isLastWave()) return

    const waveConfig = this.waveConfigList[this.index]
    const waveProps: WaveProps = {
      scene: this.scene,
      path: this.path,
      deathCount: waveConfig.deathCount,
      duration: waveConfig.duration,
      enemyCount: waveConfig.enemyCount,
      enemyType: waveConfig.enemyType,
    }

    this.now = new Wave(waveProps)
    this.index += 1
  }

  isDeathCountOver() {
    if (!this.now) return false
    const enemyCount = this.scene.children.list.filter((v) => v instanceof Enemy).length
    return this.now.deathCount > enemyCount
  }

  update(time: number, delta: number) {
    if (!this.now) return

    const wave = this.now

    if (wave.canSpawn()) {
      this.scene.add.existing(wave.spawn())
    }

    if (wave.isDone()) {
      this.nextWave()
    }

    wave.update(time, delta)
  }
}

export const testWaveConfigList: WaveConfig[] = [
  { deathCount: 60, duration: 10000, enemyCount: 8, enemyType: Mob1 },
  { deathCount: 60, duration: 10000, enemyCount: 8, enemyType: Mob2 },
]
