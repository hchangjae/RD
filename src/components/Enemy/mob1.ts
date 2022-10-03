import { Curves, Scene } from 'phaser'
import Enemy from '@/components/Enemy'

export type Mob1Props = {
  scene: Scene
  path: Curves.Path
  hp?: number
}

export default class Mob1 extends Enemy {
  constructor(props: Mob1Props) {
    const { scene, path, hp = 2 } = props

    super({ hp, defensePower: 0, scene, path, x: path.startPoint.x, y: path.startPoint.y })
  }
}
