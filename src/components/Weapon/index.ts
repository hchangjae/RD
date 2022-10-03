import Enemy from '@/components/Enemy'
import { ATTACK_DELAY, ATTACK_RATE } from '@/constant/weapon'

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

  getAttackRate() {
    return this.rate * ATTACK_DELAY
  }

  canFire() {
    return this.timer > ATTACK_DELAY * this.rate
  }

  fire(target: Enemy, quantity: number = 1) {
    this.timer -= ATTACK_DELAY * this.rate
    target.hit(this.power * quantity)
  }

  update(time: number, delta: number) {
    this.timer += delta
  }
}
