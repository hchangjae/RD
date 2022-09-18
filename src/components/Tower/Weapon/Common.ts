import Weapon, { WeaponProps } from './index.js'

type CommonProps = WeaponProps & {}

export default class Common extends Weapon {
  constructor(props: CommonProps) {
    super(props)
  }
}
