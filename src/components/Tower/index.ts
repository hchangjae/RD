import { GameObjects, Scene } from 'phaser'
import Enemy from '../Enemy'
import Weapon from './Weapon'

export type TowerProps = {
  scene: Scene
  weapon: Weapon
  x: number
  y: number
}

export default class Tower extends GameObjects.Rectangle {
  protected weapon: Weapon
  protected target: Enemy | null

  constructor(props: TowerProps) {
    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, weapon, x, y } = props

    super(scene, x, y, 100, 100, 0xffffff)

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
