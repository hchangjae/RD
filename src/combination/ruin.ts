import etc from '@/components/Tower/etc'
import hero from '@/components/Tower/hero'
import legend from '@/components/Tower/legend'
import ruin from '@/components/Tower/ruin'
import unique from '@/components/Tower/unique'

const ATowerComb = {
  dest: ruin.ATower,
  src: [
    { unit: hero.ATower, amount: 1 },
    { unit: hero.BTower, amount: 1 },
    { unit: hero.CTower, amount: 1 },
    { unit: hero.DTower, amount: 1 },
    { unit: hero.ETower, amount: 1 },
    { unit: hero.FTower, amount: 1 },
    { unit: hero.GTower, amount: 1 },
    { unit: unique.ITower, amount: 1 },
  ],
}

const BTowerComb = {
  dest: ruin.BTower,
  src: [
    { unit: etc.BTower, amount: 1 },
    { unit: legend.HTower, amount: 1 },
    { unit: legend.KTower, amount: 1 },
  ],
}

const ruinTowerCombList = [ATowerComb, BTowerComb]

export default ruinTowerCombList
