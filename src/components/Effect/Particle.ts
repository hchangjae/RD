import { GameObjects } from 'phaser'

type CustomBobProperty = {
  duration: number
  update: (time: number, delta: number) => void
}

export type Particle = GameObjects.Bob & CustomBobProperty
