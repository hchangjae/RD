import Enemy from '@/components/Enemy'
import ParticleManager from '@/components/Particle/ParticleManager'
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
  text: string
}

export default class Tower extends GameObjects.Text {
  protected skills: Skill[]
  protected target: Enemy | null
  protected isDrag: boolean
  protected dx: number
  protected dy: number
  protected particleManager: ParticleManager

  readonly weapon: Weapon
  readonly grade: TOWER_GRADE

  constructor(props: TowerProps) {
    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, weapon, skills, size, grade, text } = props
    const [width, height] = getWH(scene)
    const [x, y] = [width * randomWithPadding(LOCATION_PADDING), height * randomWithPadding(LOCATION_PADDING)]
    const color = mapGradeToColor(grade)

    super(scene, x, y, text, { fontFamily: 'phased', fontSize: `${size}px`, color })

    this.weapon = weapon
    this.skills = skills || []
    this.grade = grade
    this.target = null
    this.isDrag = false
    this.dx = 0
    this.dy = 0

    this.particleManager = new ParticleManager({ scene, text, color })

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
      this.particleManager.fire(target.x, target.y)

      // 기본 공격
      this.weapon.fire(target)

      // 스킬 공격
      this.skills.forEach((skill) => {
        if (!target.isDead() && skill.isChance()) {
          skill.effect(target)
        }
      })

      if (this.target.isDead()) {
        this.target.destroy()
        this.target = null
      }
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

const gradeToColorMap: Record<TOWER_GRADE, string> = {
  [TOWER_GRADE.NORMAL]: 'white',
  [TOWER_GRADE.MAGIC]: 'gray',
  [TOWER_GRADE.RARE]: 'khaki',
  [TOWER_GRADE.UNIQUE]: 'green',
  [TOWER_GRADE.HIDDEN]: 'teal',
  [TOWER_GRADE.HERO]: 'blue',
  [TOWER_GRADE.BEAST]: 'skyblue',
  [TOWER_GRADE.LEGEND]: 'red',
  [TOWER_GRADE.LIMIT]: 'navy',
  [TOWER_GRADE.ELITE]: 'orange',
  [TOWER_GRADE.INFINITE]: 'violet',
  [TOWER_GRADE.CREATE]: 'tomato',
  [TOWER_GRADE.RUIN]: 'purple',
  [TOWER_GRADE.EPIC]: 'yellow',
  [TOWER_GRADE.ETC]: 'gold',
}

const mapGradeToColor = (grade: TOWER_GRADE) => gradeToColorMap[grade]
