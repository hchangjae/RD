import { GameObjects, Scene } from 'phaser'
import Weapon from './Weapon'

type TowerProps = {
  scene: Scene
  weapon: Weapon
  x: number
  y: number
}

export default class Tower extends GameObjects.Sprite {
  protected weapon: Weapon

  constructor(props: TowerProps) {
    const { scene, weapon, x, y } = props
    super(scene, x, y, 'a')

    if (new.target === Tower) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }

    this.weapon = weapon
  }
}
