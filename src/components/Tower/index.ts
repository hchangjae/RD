import { LOCATION_PADDING } from '@/constant/tower'
import { randomWithPadding } from '@/utils/numberUtils'
import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'
import Enemy from '../Enemy'
import Weapon from './Weapon'

export type TowerProps = {
  scene: Scene
  weapon: Weapon
  size: number
}

export default class Tower extends GameObjects.Rectangle {
  protected weapon: Weapon
  protected target: Enemy | null

  constructor(props: TowerProps) {
    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, weapon, size } = props
    const [width, height] = getWH(scene)
    const [x, y] = [width * randomWithPadding(LOCATION_PADDING), height * randomWithPadding(LOCATION_PADDING)]

    super(scene, x, y, size, size, 0xffffff, 0.4)

    this.weapon = weapon
    this.target = null
  }

  update(time: number, delta: number): void {
    this.weapon.update(time, delta)

    if (this.target && this.weapon.canFire()) {
      const attackPower = this.weapon.fire()
      const isDead = this.target.hit(attackPower)
      if (isDead) this.target = null
    }

    if (!this.target) {
      const enemyList = this.displayList.list.filter((v) => v instanceof Enemy) as Enemy[]
      this.target = enemyList[0]
    }
  }
}
