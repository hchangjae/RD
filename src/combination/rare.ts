import magic from '@/components/Tower/magic'
import normal from '@/components/Tower/normal'
import rare from '@/components/Tower/rare'

const ATowerComb = {
  dest: rare.ATower,
  src: [{ unit: magic.ATower, amount: 2 }],
}

const BTowerComb = {
  dest: rare.BTower,
  src: [
    { unit: magic.ETower, amount: 2 },
    { unit: normal.FTower, amount: 1 },
  ],
}

const CTowerComb = {
  dest: rare.CTower,
  src: [
    { unit: normal.ATower, amount: 1 },
    { unit: normal.CTower, amount: 1 },
    { unit: normal.ETower, amount: 1 },
  ],
}

const DTowerComb = {
  dest: rare.DTower,
  src: [
    { unit: normal.ATower, amount: 1 },
    { unit: magic.HTower, amount: 1 },
    { unit: magic.GTower, amount: 1 },
  ],
}

const ETowerComb = {
  dest: rare.ETower,
  src: [
    { unit: magic.CTower, amount: 1 },
    { unit: normal.ITower, amount: 1 },
    { unit: normal.ETower, amount: 1 },
  ],
}

const FTowerComb = {
  dest: rare.FTower,
  src: [
    { unit: normal.GTower, amount: 2 },
    { unit: normal.ETower, amount: 1 },
  ],
}

const GTowerComb = {
  dest: rare.GTower,
  src: [
    { unit: normal.DTower, amount: 1 },
    { unit: magic.GTower, amount: 1 },
  ],
}

const HTowerComb = {
  dest: rare.HTower,
  src: [
    { unit: normal.ETower, amount: 1 },
    { unit: magic.DTower, amount: 1 },
    { unit: normal.ITower, amount: 1 },
  ],
}

const ITowerComb = {
  dest: rare.ITower,
  src: [
    { unit: normal.DTower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
    { unit: normal.GTower, amount: 2 },
  ],
}

const JTowerComb = {
  dest: rare.JTower,
  src: [{ unit: magic.HTower, amount: 2 }],
}

const KTowerComb = {
  dest: rare.KTower,
  src: [
    { unit: normal.CTower, amount: 2 },
    { unit: normal.ETower, amount: 1 },
    { unit: normal.DTower, amount: 1 },
  ],
}

const LTowerComb = {
  dest: rare.LTower,
  src: [
    { unit: normal.BTower, amount: 2 },
    { unit: magic.ETower, amount: 1 },
  ],
}

const MTowerComb = {
  dest: rare.MTower,
  src: [{ unit: magic.BTower, amount: 2 }],
}

const NTowerComb = {
  dest: rare.NTower,
  src: [
    { unit: normal.ATower, amount: 1 },
    { unit: normal.CTower, amount: 1 },
    { unit: normal.ITower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const OTowerComb = {
  dest: rare.OTower,
  src: [
    { unit: normal.ATower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
    { unit: magic.FTower, amount: 1 },
  ],
}

const PTowerComb = {
  dest: rare.PTower,
  src: [
    { unit: magic.HTower, amount: 1 },
    { unit: magic.ETower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const QTowerComb = {
  dest: rare.QTower,
  src: [
    { unit: normal.BTower, amount: 1 },
    { unit: magic.ETower, amount: 1 },
    { unit: magic.HTower, amount: 1 },
  ],
}

const RTowerComb = {
  dest: rare.RTower,
  src: [
    { unit: normal.DTower, amount: 1 },
    { unit: magic.ETower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const STowerComb = {
  dest: rare.STower,
  src: [
    { unit: magic.DTower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
  ],
}

const TTowerComb = {
  dest: rare.TTower,
  src: [{ unit: magic.FTower, amount: 2 }],
}

const UTowerComb = {
  dest: rare.UTower,
  src: [
    { unit: magic.DTower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
    { unit: normal.FTower, amount: 1 },
  ],
}

const VTowerComb = {
  dest: rare.VTower,
  src: [
    { unit: normal.FTower, amount: 2 },
    { unit: normal.HTower, amount: 1 },
    { unit: normal.ITower, amount: 1 },
  ],
}

const rareTowerCombList = [
  ATowerComb,
  BTowerComb,
  CTowerComb,
  DTowerComb,
  ETowerComb,
  FTowerComb,
  GTowerComb,
  HTowerComb,
  ITowerComb,
  JTowerComb,
  KTowerComb,
  LTowerComb,
  MTowerComb,
  NTowerComb,
  OTowerComb,
  PTowerComb,
  QTowerComb,
  RTowerComb,
  STowerComb,
  TTowerComb,
  UTowerComb,
  VTowerComb,
]

export default rareTowerCombList
