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

export type TowerComb = Comb<typeof Tower>

const createSelector = (list: TowerComb[]) => (tower: typeof Tower) => list.find((towerComb) => towerComb.dest === tower)

const towerCombList = [
  ...magicTowerCombList,
  ...rareTowerCombList,
  ...etcTowerCombList,
  ...ruinTowerCombList,
  ...uniqueTowerCombList, // a
]

const firstSrcToCombMap = new Map<typeof Tower, TowerComb[]>()

towerCombList.forEach((towerComb) => {
  const key = towerComb.src[0]?.unit
  const value = towerComb
  if (!key) return

  const list = firstSrcToCombMap.get(key)
  if (!list) return firstSrcToCombMap.set(key, [value])

  list.push(value)
})

export const getTowerCombListBySrc = (towerClass: typeof Tower) => firstSrcToCombMap.get(towerClass) || []

export const getTowerCombByDest = createSelector(towerCombList)
