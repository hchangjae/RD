import { SCENE } from '@/constant/scene'
import { useValue } from '@/store'
import { deathCountState } from '@/store/atom/deathCount'
import { getByType, getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'
import Enemy from './Enemy'

const createText = (enemyCount: number, deathCount: number) => `👻 ${enemyCount} < ${deathCount}`

type DeathCountDisplayProps = {
  scene: Scene
}

export default class DeathCountDisplay extends GameObjects.Text {
  constructor(props: DeathCountDisplayProps) {
    const { scene } = props

    const [width, height] = getWH(scene)

    super(scene, width * 0.4, height * 0.02, 0 + '👻', { font: '20px', padding: { top: 3 } })
  }

  update(...args: any[]): void {
    const deathCount = useValue(deathCountState)

    const mainScene = this.scene.scene.get(SCENE.MAIN)
    const enemyCount = getByType(mainScene, Enemy).length

    this.setText(createText(enemyCount, deathCount))
  }
}
