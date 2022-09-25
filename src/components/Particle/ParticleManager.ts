import {
  PARTICLE_ANGLE_MAX,
  PARTICLE_ANGLE_MIN,
  PARTICLE_DURATION_MAX,
  PARTICLE_DURATION_MIN,
  PARTICLE_FREQUENCY_MAX,
  PARTICLE_GRAVITY_Y,
  PARTICLE_SPEED_MAX,
  PARTICLE_SPEED_MIN,
  PARTICLE_TEXTURE_PREFIX,
} from '@/constant/particle'
import { GameObjects, Scene } from 'phaser'

type ParticleManagerProps = {
  scene: Scene
  text: string
}

export default class ParticleManager extends GameObjects.Particles.ParticleEmitterManager {
  constructor(props: ParticleManagerProps) {
    const { scene, text } = props

    const textureKey = PARTICLE_TEXTURE_PREFIX + text

    let isTextureExist = scene.textures.exists(textureKey)
    if (!isTextureExist) {
      const { canvas } = scene.make.text({ text, style: { fontFamily: 'phased', fontSize: '10px' }, visible: false })
      scene.textures.addCanvas(textureKey, canvas)
    }

    super(scene, textureKey)

    scene.add.existing(this)

    this.createEmitter({
      blendMode: 'ADD',
      quantity: 1,
      gravityY: PARTICLE_GRAVITY_Y,
      frequency: -1,
      alpha: { start: 1, end: 0 },
      speed: { min: PARTICLE_SPEED_MIN, max: PARTICLE_SPEED_MAX },
      angle: { min: PARTICLE_ANGLE_MIN, max: PARTICLE_ANGLE_MAX },
      lifespan: { min: PARTICLE_DURATION_MIN, max: PARTICLE_DURATION_MAX },
    })
  }

  fire(x: number, y: number, quantity: number = 1) {
    let count = 0
    this.emitters.list.forEach((emitter) => {
      emitter.setPosition(x, y)
      emitter.setQuantity(quantity)
      emitter.setFrequency(PARTICLE_FREQUENCY_MAX)

      emitter.onParticleEmit(() => {
        count++
        if (count > this.emitters.list.length - 1) {
          this.emitters.list.forEach((v) => v.setFrequency(-1))
        }
      })
    })
  }
}
