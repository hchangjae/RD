import { Curves, Scene } from 'phaser'
import { ConcreteEnemy } from '../Enemy/Type'

const SPAWN_DELAY = 1000

export type WaveProps = {
  scene: Scene
  path: Curves.Path
  duration: number
  rewardCount: number
  deathCount: number
  enemyCount: number
  enemyType: ConcreteEnemy
}

export default class Wave {
  protected path: Curves.Path
  protected scene: Scene
  protected duration: number
  protected enemyType: ConcreteEnemy
  protected enemyCount: number

  readonly deathCount: number
  readonly rewardCount: number

  private timer: number

  constructor(props: WaveProps) {
    const { scene, path, deathCount, duration, enemyType, enemyCount, rewardCount } = props
    this.path = path
    this.scene = scene
    this.duration = duration
    this.deathCount = deathCount
    this.enemyType = enemyType
    this.enemyCount = enemyCount
    this.rewardCount = rewardCount
    this.timer = 0
  }

  isDone() {
    return this.duration <= 0
  }

  canSpawn() {
    return this.enemyCount > 0 && this.timer >= SPAWN_DELAY
  }

  spawn() {
    this.timer = 0
    this.enemyCount -= 1
    return new this.enemyType({ path: this.path, scene: this.scene })
  }

  update(time: number, delta: number) {
    this.timer += delta
    this.duration -= delta / 1000
  }
}
