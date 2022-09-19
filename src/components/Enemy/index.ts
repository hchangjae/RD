import { DEFENSE_POWER_BASE, HP_RADIUS, MOVE_DURATION } from '@/constant/enemy'
import { Curves, GameObjects, Scene } from 'phaser'

export type EnemyProps = {
  scene: Scene
  path: Curves.Path
  x: number
  y: number
  hp: number
  defensePower: number
}

export default class Enemy extends GameObjects.PathFollower {
  protected defensePower: number
  protected hp: number
  protected hpMax: number
  protected graphics: GameObjects.Graphics

  constructor(props: EnemyProps) {
    if (new.target === Enemy) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, path, x, y, defensePower, hp } = props

    super(scene, path, x, y, '', 0)

    this.startFollow({ duration: MOVE_DURATION + Math.random() * 1000, loop: -1 })

    this.defensePower = defensePower
    this.hp = this.hpMax = hp
    this.graphics = this.scene.add.graphics({ x: 0, y: 0, lineStyle: { color: 0x00ff00, width: 2.5 } })
    this.visible = false
  }

  isDead() {
    return this.hp <= 0
  }

  hit(attackPower: number) {
    const damage = attackPower * (DEFENSE_POWER_BASE / (this.defensePower + DEFENSE_POWER_BASE))

    this.hp = Math.max(this.hp - damage, 0)

    return this.isDead()
  }

  update(time: number, delta: number): void {
    this.graphics.clear()
    this.graphics.strokeCircle(this.x, this.y, HP_RADIUS)
    this.graphics.fillCircle(this.x, this.y, (HP_RADIUS * this.hp) / this.hpMax)

    if (this.isDead()) {
      this.destroy()
      this.graphics.destroy()
    }
  }
}
