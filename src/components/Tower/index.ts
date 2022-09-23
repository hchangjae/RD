import Enemy from '@/components/Enemy'
import Skill from '@/components/Skill'
import Weapon from '@/components/Weapon'
import { EVENT } from '@/constant/event'
import { LOCATION_PADDING, TOWER_GRADE } from '@/constant/tower'
import { randomWithPadding } from '@/utils/numberUtils'
import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

export type TowerProps = {
  scene: Scene
  weapon: Weapon
  skills?: Skill[]
  size: number
  grade: TOWER_GRADE
}

export default class Tower extends GameObjects.Rectangle {
  protected weapon: Weapon
  protected skills: Skill[]
  protected grade: TOWER_GRADE
  protected target: Enemy | null
  protected isDrag: boolean
  protected dx: number
  protected dy: number

  constructor(props: TowerProps) {
    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, weapon, skills, size, grade } = props
    const [width, height] = getWH(scene)
    const [x, y] = [width * randomWithPadding(LOCATION_PADDING), height * randomWithPadding(LOCATION_PADDING)]

    super(scene, x, y, size, size, 0xffffff, 0.4)

    this.weapon = weapon
    this.skills = skills || []
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
      this.target = null
    })
  }

  update(time: number, delta: number): void {
    this.weapon.update(time, delta)

    // 공격
    if (this.target && this.weapon.canFire()) {
      const target = this.target

      // 기본 공격
      this.weapon.fire(target)

      // 스킬 공격
      this.skills.forEach((skill) => {
        if (!target.isDead() && skill.isChance()) {
          skill.effect(target)
        }
      })

      if (this.target.isDead()) this.target = null
    }

    // 목표물 지정
    if (!this.target) {
      const enemyList = this.displayList.list.filter((v) => v instanceof Enemy) as Enemy[]
      enemyList.sort((a: Enemy, b: Enemy) => {
        const distA = Phaser.Math.Distance.BetweenPoints(a, this)
        const distB = Phaser.Math.Distance.BetweenPoints(b, this)
        return distA - distB
      })
      this.target = enemyList[0]
    }

    // 드래그
    if (!this.isDrag && Math.random() > 0.99) {
      this.dx = Math.random() * 100 - 50
      this.dy = Math.random() * 100 - 50
    }
  }
}
