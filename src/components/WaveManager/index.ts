import { useSetter } from '@/store'
import { deathCountState } from '@/store/atom/deathCount'
import { Curves, GameObjects, Scene } from 'phaser'
import Enemy from '@/components/Enemy'
import Mob1 from '@/components/Enemy/mob1'
import Mob2 from '@/components/Enemy/mob2'
import { ConcreteEnemy } from '@/components/Enemy/Type'
import Wave, { WaveProps } from '@/components/WaveManager/Wave'
import ATower from '@/components/Tower/normal/ATower'

type WaveConfig = {
  deathCount: number
  duration: number
  enemyType: ConcreteEnemy
  enemyCount: number
  rewardCount: number
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

    if (this.now) {
      const rewardCount = this.now.rewardCount
      new Array(rewardCount).fill(null).forEach(() => {
        this.scene.add.existing(new ATower({ scene: this.scene }))
      })
    }

    const waveConfig = this.waveConfigList[this.index]
    const waveProps: WaveProps = {
      scene: this.scene,
      path: this.path,
      deathCount: waveConfig.deathCount,
      duration: waveConfig.duration,
      enemyCount: waveConfig.enemyCount,
      enemyType: waveConfig.enemyType,
      rewardCount: waveConfig.rewardCount,
    }

    this.now = new Wave(waveProps)
    this.index += 1

    const setDeathCount = useSetter(deathCountState)
    setDeathCount(this.now.deathCount)
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
  { deathCount: 60, duration: 9, enemyCount: 8, enemyType: Mob1, rewardCount: 5 },
  { deathCount: 60, duration: 9, enemyCount: 8, enemyType: Mob2, rewardCount: 5 },
  { deathCount: 60, duration: 9, enemyCount: 8, enemyType: Mob2, rewardCount: 5 },
  { deathCount: 60, duration: 9, enemyCount: 8, enemyType: Mob2, rewardCount: 5 },
]
