import Tower from '@/components/Tower'
import { createAtom } from '@/store'

export const towerListState = createAtom<Tower[]>({
  key: 'TowerListState',
  default: [],
})
