import etc from '@/components/Tower/etc'
import unique from '@/components/Tower/unique'

const ATowerComb = {
  dest: etc.ATower,
  src: [
    // 나무 1
  ],
}

const BTowerComb = {
  dest: etc.BTower,
  src: [
    { unit: unique.OTower, amount: 1 },
    // 나무 5
  ],
}

const CTowerComb = {
  dest: etc.CTower,
  src: [
    // 고도 1%
  ],
}

const etcTowerCombList = [ATowerComb, BTowerComb, CTowerComb]

export default etcTowerCombList
