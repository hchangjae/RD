import { Scene } from 'phaser'
import { createAtom } from '..'

export const sceneListState = createAtom<Scene[]>({
  key: 'SceneListState',
  default: [],
})
