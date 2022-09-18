import { useValue } from '@/store'
import { towerListState } from '@/store/atom/tower'

export default () => {
  const towerList = useValue(towerListState)

  const list = [...towerList]

  list.forEach((v) => v.update())
}
