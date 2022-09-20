import { Curves, Scene } from 'phaser'
import Enemy from '@/components/Enemy'

export type Mob2Props = {
  scene: Scene
  path: Curves.Path
}

export default class Mob2 extends Enemy {
  constructor(props: Mob2Props) {
    const { scene, path } = props

    super({ hp: 500, defensePower: 0, scene, path, x: path.startPoint.x, y: path.startPoint.y })
  }
}
