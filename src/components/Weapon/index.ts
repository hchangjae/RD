import Enemy from '@/components/Enemy'
import { ATTACK_DELAY } from '@/constant/weapon'

export const enum ATTACK_RATE {
  SLOWEST = 4,
  SLOWER = 2,
  SLOW = 1.5,
  NORMAL = 1,
  FAST = 0.75,
  FASTER = 0.5,
  FASTEST = 0.25,
}

export type WeaponProps = {
  power: number
  range: number
  rate: ATTACK_RATE
}

export default class Weapon {
  protected power: number
  protected range: number
  protected rate: ATTACK_RATE

  private timer: number

  constructor(props: WeaponProps) {
    if (new.target === Weapon) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { power, range, rate } = props

    this.power = power
    this.range = range
    this.rate = rate
    this.timer = 0
  }

  canFire() {
    return this.timer > ATTACK_DELAY * this.rate
  }

  fire(target: Enemy) {
    this.timer -= ATTACK_DELAY * this.rate
    target.hit(this.power)
  }

  update(time: number, delta: number) {
    this.timer += delta
  }
}
