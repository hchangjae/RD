import Enemy from '@/components/Enemy'
import ParticleManager from '@/components/Particle/ParticleManager'
import Skill from '@/components/Skill'
import Weapon from '@/components/Weapon'
import { EVENT } from '@/constant/event'
import { LOCATION_PADDING, TOWER_GRADE } from '@/constant/tower'
import { MAIN_WIDTH, PADDING } from '@/constant/ui'
import { randomWithPadding } from '@/utils/numberUtils'
import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

export type TowerProps = {
  scene: Scene
  weapon?: Weapon
  skills?: Skill[]
  size: number
  grade: TOWER_GRADE
  text: string
  isOnlyDisplay?: boolean
}

export default class Tower extends GameObjects.Text {
  protected skills: Skill[]
  protected target: Enemy | null
  protected isDrag: boolean
  protected dx: number
  protected dy: number
  protected particleManager?: ParticleManager
  protected amount: number
  protected amountDisplay?: GameObjects.Container

  readonly weapon?: Weapon
  readonly grade: TOWER_GRADE

  constructor(props: TowerProps) {
    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { scene, weapon, skills, size, grade, text, isOnlyDisplay } = props
    const [width] = getWH(scene)
    const [x, y] = [
      width * randomWithPadding(PADDING) * (MAIN_WIDTH + PADDING + PADDING),
      width * randomWithPadding(PADDING) * (MAIN_WIDTH + PADDING + PADDING),
    ]
    const color = mapGradeToColor(grade)

    super(scene, x, y, text, { fontFamily: 'phased', fontSize: `${size}px`, color })

    this.weapon = weapon
    this.skills = skills || []
    this.grade = grade
    this.target = null
    this.isDrag = false
    this.amount = 1
    this.dx = 0
    this.dy = 0

    if (isOnlyDisplay) return

    this.particleManager = new ParticleManager({ scene, text, color })
    this.amountDisplay = new GameObjects.Container(scene, x, y)

    const amountText = new GameObjects.Text(scene, this.width, -2, '1', { color: 'white', font: `700 ${size / 2}px Arial` })

    this.scene.add.existing(amountText)

    this.amountDisplay.add(amountText)

    amountText.update = () => {
      if (this.amount > 1) {
        amountText.setText(`${this.amount}`)
      } else {
        amountText.setText('')
      }
    }

    this.scene.add.existing(this.amountDisplay)
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

  destroy(fromScene?: boolean | undefined): void {
    if (this.amountDisplay) this.amountDisplay.destroy(fromScene)
    super.destroy(fromScene)
  }

  incAmount(amount: number = 1) {
    this.amount += amount
  }

  decAmount(amount: number = 1) {
    this.amount -= amount
    if (this.amount <= 0) this.destroy(true)
  }

  getAmount() {
    return this.amount
  }

  update(time: number, delta: number): void {
    this.weapon?.update(time, delta)
    this.amountDisplay?.update(time, delta)
    this.amountDisplay?.list.forEach((v) => v.update(time, delta))

    this.amountDisplay?.setX(this.x)
    this.amountDisplay?.setY(this.y)

    // ??????
    if (this.target && this.weapon?.canFire()) {
      const target = this.target
      this.particleManager?.fire(target.x, target.y, this.amount)

      // ?????? ??????
      this.weapon.fire(target, this.amount)

      // ?????? ??????
      this.skills.forEach((skill) => {
        if (!target.isDead() && skill.isChance(this.amount)) {
          skill.effect(target, this.amount)
        }
      })

      if (this.target.isDead()) {
        this.target.destroy()
        this.target = null
      }
    }

    // ????????? ??????
    if (!this.target) {
      const enemyList = this.displayList.list.filter((v) => v instanceof Enemy) as Enemy[]
      enemyList.sort((a: Enemy, b: Enemy) => {
        const distA = Phaser.Math.Distance.BetweenPoints(a, this)
        const distB = Phaser.Math.Distance.BetweenPoints(b, this)
        return distA - distB
      })
      this.target = enemyList[0]
    }

    // ?????????
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
