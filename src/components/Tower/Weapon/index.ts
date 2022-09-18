export type WeaponProps = {
  power: number
  range: number
  rate: number
}

export default class Weapon {
  protected power: number
  protected range: number
  protected rate: number

  constructor(props: WeaponProps) {
    if (new.target === Weapon) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    const { power, range, rate } = props

    this.power = power
    this.range = range
    this.rate = rate
  }
}
