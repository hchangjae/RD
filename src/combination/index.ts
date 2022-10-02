import etcTowerCombList from '@/combination/etc'
import magicTowerCombList from '@/combination/magic'
import rareTowerCombList from '@/combination/rare'
import ruinTowerCombList from '@/combination/ruin'
import uniqueTowerCombList from '@/combination/unique'
import Tower from '@/components/Tower'

type Stuff<T> = {
  unit: T
  amount: number
}

type Comb<T> = {
  dest: T
  src: Stuff<T>[]
}

type TowerComb = Comb<typeof Tower>

const createSelector = (list: TowerComb[]) => (tower: typeof Tower) => list.find((towerComb) => towerComb.dest === tower)

const towerCombList = [
  ...magicTowerCombList,
  ...rareTowerCombList,
  ...etcTowerCombList,
  ...ruinTowerCombList,
  ...uniqueTowerCombList, // a
]

export const getTowerComb = createSelector(towerCombList)
