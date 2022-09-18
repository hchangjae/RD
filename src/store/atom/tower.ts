import Tower from '@/components/Tower'
import { createAtom } from '..'

export const towerListState = createAtom<Tower[]>({
  key: 'TowerListState',
  default: [],
})
