import Debuff from '@/components/Debuff'
import { DEBUFF_TYPE } from '@/constant/skill'

export const isStunDebuff = (debuff: Debuff) => debuff.type === DEBUFF_TYPE.STUN

type DebuffProps = {
  type: DEBUFF_TYPE.STUN
  duration: number
}

export default class Slow extends Debuff {
  constructor(props: DebuffProps) {
    super(props)
  }
}
