import { DEBUFF_TYPE } from '@/constant/skill'

type DebuffProps = {
  type: DEBUFF_TYPE
  duration: number
}

export default class Debuff {
  duration: number

  readonly type: DEBUFF_TYPE

  constructor(props: DebuffProps) {
    const { type, duration } = props

    this.type = type
    this.duration = duration * 1000
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this) as typeof this
  }

  isDone() {
    return this.duration <= 0
  }

  update(time: number, delta: number) {
    this.duration = Math.max(this.duration - delta, 0)
  }
}
