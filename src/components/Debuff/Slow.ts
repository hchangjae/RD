import Debuff from '@/components/Debuff'
import { DEBUFF_TYPE } from '@/constant/skill'

type SLOW_DEBUFF_TYPE = DEBUFF_TYPE.SLOW_A | DEBUFF_TYPE.SLOW_B | DEBUFF_TYPE.SLOW_C | DEBUFF_TYPE.SLOW_D | DEBUFF_TYPE.SLOW_E
export const isSlowDebuff = (debuff: Debuff) =>
  [DEBUFF_TYPE.SLOW_A, DEBUFF_TYPE.SLOW_B, DEBUFF_TYPE.SLOW_C, DEBUFF_TYPE.SLOW_D, DEBUFF_TYPE.SLOW_E].includes(debuff.type)

type DebuffProps = {
  type: SLOW_DEBUFF_TYPE
  duration: number
  amount: number
}

export default class Slow extends Debuff {
  amount: number

  constructor(props: DebuffProps) {
    super(props)

    const { amount } = props

    this.amount = amount
  }
}
