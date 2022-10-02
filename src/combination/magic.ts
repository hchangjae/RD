import magic from '@/components/Tower/magic'
import normal from '@/components/Tower/normal'

const ATowerComb = {
  dest: magic.ATower,
  src: [
    { unit: normal.ATower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
  ],
}

const BTowerComb = {
  dest: magic.BTower,
  src: [{ unit: normal.CTower, amount: 2 }],
}

const CTowerComb = {
  dest: magic.CTower,
  src: [{ unit: normal.DTower, amount: 2 }],
}

const DTowerComb = {
  dest: magic.DTower,
  src: [{ unit: normal.ETower, amount: 2 }],
}

const ETowerComb = {
  dest: magic.ETower,
  src: [{ unit: normal.FTower, amount: 2 }],
}

const FTowerComb = {
  dest: magic.FTower,
  src: [
    { unit: normal.GTower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const GTowerComb = {
  dest: magic.GTower,
  src: [{ unit: normal.ITower, amount: 2 }],
}

const HTowerComb = {
  dest: magic.HTower,
  src: [
    { unit: magic.ATower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
  ],
}

const towerCombList = [ATowerComb, BTowerComb, CTowerComb, DTowerComb, ETowerComb, FTowerComb, GTowerComb, HTowerComb]

export default towerCombList
