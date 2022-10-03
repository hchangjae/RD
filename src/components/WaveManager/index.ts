import { useSetter } from '@/store'
import { deathCountState } from '@/store/atom/deathCount'
import { Curves, GameObjects, Scene } from 'phaser'
import Enemy from '@/components/Enemy'
import Mob1 from '@/components/Enemy/mob1'
import { ConcreteEnemy } from '@/components/Enemy/type'
import Wave, { WaveProps } from '@/components/WaveManager/Wave'
import { getByType } from '@/utils/sceneUtils'
import TowerManager from '@/components/Tower/TowerManager'

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

  getDuration() {
    return this.now?.getDuration() || 0
  }

  nextWave() {
    if (this.isLastWave()) return

    if (this.now) {
      const rewardCount = this.now.rewardCount
      const [towerManager] = getByType(this.scene, TowerManager)
      towerManager.addTower(rewardCount)
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

  getWaveNumber() {
    return this.index
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

    const enemyCount = getByType(this.scene, Enemy).length
    if (enemyCount > this.now.deathCount) {
      console.log('game over')
    }

    wave.update(time, delta)
  }
}

const createWaveConfigList = (enemyClass: typeof Enemy, round: number = 60) =>
  new Array(round).fill('').map((_, i) => {
    const baseHp = 5
    const hp = baseHp * Math.pow(1.3, i) + baseHp * i
    class temp extends enemyClass {
      constructor(props: any) {
        super({ ...props, hp })
      }
    }
    const waveConfig = {
      deathCount: 60,
      duration: 10,
      enemyCount: 7,
      enemyType: temp,
      rewardCount: 3,
    } as WaveConfig
    return waveConfig
  })

export const testWaveConfigList: WaveConfig[] = createWaveConfigList(Mob1, 40)
