import Weapon, { WeaponProps } from './index'

type CommonProps = WeaponProps & {}

export default class Common extends Weapon {
  constructor(props: CommonProps) {
    super(props)
  }
}
