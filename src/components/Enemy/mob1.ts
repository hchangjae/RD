import { Curves, Scene } from 'phaser'
import Enemy from '@/components/Enemy'

export type Mob1Props = {
  scene: Scene
  path: Curves.Path
}

export default class Mob1 extends Enemy {
  constructor(props: Mob1Props) {
    const { scene, path } = props

    super({ hp: 100, defensePower: 0, scene, path, x: path.startPoint.x, y: path.startPoint.y })
  }
}
