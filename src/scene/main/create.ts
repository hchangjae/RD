import ArrowTower from '@/components/Tower/ArrowTower'
import { useSetter } from '@/store'
import { sceneListState } from '@/store/atom/scene'
import { towerListState } from '@/store/atom/tower'
import { Scene } from 'phaser'

export default () => {
  const setTowerList = useSetter(towerListState)
  const setSceneList = useSetter(sceneListState)

  setTowerList([new ArrowTower()])
  setSceneList([new Scene({ active: true })])
}
