import Debuff from '@/components/Debuff'
import Slow, { isSlowDebuff } from '@/components/Debuff/Slow'
import Stun, { isStunDebuff } from '@/components/Debuff/Stun'
import { DEFENSE_POWER_BASE, HP_RADIUS, MOVE_DURATION } from '@/constant/enemy'
import { filterDuplicate } from '@/utils/arrayUtils'
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
  protected debuffs: Debuff[]

  constructor(props: EnemyProps) {
    if (new.target === Enemy) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, path, x, y, defensePower, hp } = props

    super(scene, path, x, y, '', 0)

    this.startFollow({ duration: MOVE_DURATION, loop: -1 })

    this.defensePower = defensePower
    this.hp = this.hpMax = hp
    this.debuffs = []

    this.graphics = this.scene.add.graphics({ x: 0, y: 0 })
    this.visible = false
  }

  isDead() {
    return this.hp <= 0
  }

  hit(attackPower: number) {
    const damage = attackPower * (DEFENSE_POWER_BASE / (this.defensePower + DEFENSE_POWER_BASE))

    this.hp = Math.max(this.hp - damage, 0)
  }

  spellDebuff(debuff: Debuff) {
    const keySelector = (v: Debuff) => v.type
    this.debuffs = filterDuplicate([...this.debuffs, debuff], keySelector)
  }

  destroy(fromScene?: boolean | undefined): void {
    this.graphics.destroy(fromScene)
    super.destroy(fromScene)
  }

  update(time: number, delta: number): void {
    this.graphics.clear()
    this.graphics.lineStyle(1, 0xff0000)
    this.graphics.strokeCircle(this.x, this.y, HP_RADIUS / 10)
    this.graphics.fillStyle(0xffffff, 0.3)
    this.graphics.fillCircle(this.x, this.y, (HP_RADIUS * this.hp) / this.hpMax)

    // 디버프 관리
    this.debuffs = this.debuffs.filter((debuff) => !debuff.isDone())
    this.debuffs.forEach((debuff) => debuff.update(time, delta))

    // 슬로우 계산
    const slowDebuffs = this.debuffs.filter(isSlowDebuff) as Slow[]
    const speed = slowDebuffs.reduce((acc, cur) => acc - cur.amount, 1)
    this.pathTween.setTimeScale(1 * speed)

    // 스턴
    const isStun = this.debuffs.some(isStunDebuff)
    if (isStun) {
      this.pauseFollow()
    } else {
      this.resumeFollow()
    }
  }
}
