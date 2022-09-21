import Enemy from '@/components/Enemy'
import Weapon from '@/components/Weapon'
import { EVENT } from '@/constant/event'
import { LOCATION_PADDING, TOWER_GRADE } from '@/constant/tower'
import { randomWithPadding } from '@/utils/numberUtils'
import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

export type TowerProps = {
  scene: Scene
  weapon: Weapon
  size: number
  grade: TOWER_GRADE
}

export default class Tower extends GameObjects.Rectangle {
  protected weapon: Weapon
  protected grade: TOWER_GRADE
  protected target: Enemy | null
  protected isDrag: boolean
  protected dx: number
  protected dy: number

  constructor(props: TowerProps) {
    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, weapon, size, grade } = props
    const [width, height] = getWH(scene)
    const [x, y] = [width * randomWithPadding(LOCATION_PADDING), height * randomWithPadding(LOCATION_PADDING)]

    super(scene, x, y, size, size, 0xffffff, 0.4)

    this.weapon = weapon
    this.grade = grade
    this.target = null
    this.isDrag = false
    this.dx = 0
    this.dy = 0

    this.scene.input.setDraggable(this.setInteractive())

    // event
    this.on(EVENT.DRAG_START, () => {
      this.isDrag = true
    })
    this.on(EVENT.DRAG_END, () => {
      this.isDrag = false
    })
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

    if (!this.isDrag && Math.random() > 0.99) {
      this.dx = Math.random() * 100 - 50
      this.dy = Math.random() * 100 - 50
    }

    // physics
    const move = () => {
      this.x += (this.dx * delta) / 1000
      this.y += (this.dy * delta) / 1000
    }
    if (Math.abs(this.dx) > 1) {
      const sign = Math.sign(this.dx)
      this.dx -= ((100 * delta) / 1000) * sign
      move()
    }
    if (Math.abs(this.dy) > 1) {
      const sign = Math.sign(this.dy)
      this.dy -= ((100 * delta) / 1000) * sign
      move()
    }
  }
}
