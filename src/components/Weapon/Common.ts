import Weapon, { WeaponProps } from '@/components/Weapon/index'

type CommonProps = WeaponProps & {}

export default class Common extends Weapon {
  constructor(props: CommonProps) {
    super(props)
  }
}
