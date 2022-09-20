import { Scene } from 'phaser'
import { createAtom } from '@/store'

export const sceneListState = createAtom<Scene[]>({
  key: 'SceneListState',
  default: [],
})
