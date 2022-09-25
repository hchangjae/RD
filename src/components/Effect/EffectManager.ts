import { Particle } from '@/components/Effect/Particle'
import { GameObjects, Scene } from 'phaser'

type EffectManagerProps = {
  scene: Scene
}

export default class EffectManager extends GameObjects.Blitter {
  constructor(props: EffectManagerProps) {
    const { scene } = props
    super(scene)
  }

  update(time: number, delta: number): void {
    const particleList = this.children.list as Particle[]
    particleList.forEach((b) => b.update(time, delta))
  }
}
