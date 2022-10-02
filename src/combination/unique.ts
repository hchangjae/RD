import magic from '@/components/Tower/magic'
import normal from '@/components/Tower/normal'
import rare from '@/components/Tower/rare'
import unique from '@/components/Tower/unique'

const ATowerComb = {
  dest: unique.ATower,
  src: [
    { unit: rare.BTower, amount: 1 },
    { unit: normal.GTower, amount: 2 },
    { unit: normal.FTower, amount: 1 },
    { unit: magic.DTower, amount: 1 },
  ],
}

const BTowerComb = {
  dest: unique.BTower,
  src: [
    { unit: rare.CTower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
    { unit: normal.DTower, amount: 1 },
    { unit: rare.UTower, amount: 1 },
  ],
}

const CTowerComb = {
  dest: unique.CTower,
  src: [
    { unit: rare.VTower, amount: 1 },
    { unit: rare.DTower, amount: 1 },
    { unit: normal.ATower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const DTowerComb = {
  dest: unique.DTower,
  src: [
    { unit: rare.TTower, amount: 1 },
    { unit: magic.FTower, amount: 1 },
    { unit: magic.GTower, amount: 1 },
    { unit: magic.HTower, amount: 1 },
  ],
}

const ETowerComb = {
  dest: unique.ETower,
  src: [
    { unit: rare.BTower, amount: 1 },
    { unit: rare.DTower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
  ],
}

const FTowerComb = {
  dest: unique.FTower,
  src: [
    { unit: rare.NTower, amount: 1 },
    { unit: rare.TTower, amount: 1 },
    { unit: normal.CTower, amount: 1 },
  ],
}

const GTowerComb = {
  dest: unique.GTower,
  src: [
    { unit: rare.ITower, amount: 1 },
    { unit: magic.DTower, amount: 1 },
    { unit: magic.GTower, amount: 1 },
  ],
}

const HTowerComb = {
  dest: unique.HTower,
  src: [
    { unit: rare.FTower, amount: 2 },
    { unit: normal.GTower, amount: 1 },
  ],
}

const ITowerComb = {
  dest: unique.ITower,
  src: [
    { unit: rare.HTower, amount: 1 },
    { unit: magic.GTower, amount: 1 },
    { unit: normal.ITower, amount: 1 },
  ],
}

const JTowerComb = {
  dest: unique.JTower,
  src: [
    { unit: rare.NTower, amount: 1 },
    { unit: rare.PTower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const KTowerComb = {
  dest: unique.KTower,
  src: [
    { unit: rare.KTower, amount: 1 },
    { unit: magic.ATower, amount: 1 },
    { unit: magic.BTower, amount: 1 },
    { unit: normal.ATower, amount: 1 },
  ],
}

const LTowerComb = {
  dest: unique.LTower,
  src: [
    { unit: rare.NTower, amount: 1 },
    { unit: rare.RTower, amount: 1 },
    { unit: normal.BTower, amount: 2 },
  ],
}

const MTowerComb = {
  dest: unique.MTower,
  src: [
    { unit: rare.BTower, amount: 1 },
    { unit: rare.JTower, amount: 1 },
    { unit: magic.ATower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const NTowerComb = {
  dest: unique.NTower,
  src: [
    { unit: magic.ATower, amount: 1 },
    { unit: magic.BTower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
    { unit: magic.DTower, amount: 1 },
    { unit: magic.GTower, amount: 1 },
  ],
}

const OTowerComb = {
  dest: unique.OTower,
  src: [
    { unit: rare.ATower, amount: 1 },
    { unit: magic.BTower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
    { unit: magic.FTower, amount: 1 },
  ],
}

const PTowerComb = {
  dest: unique.PTower,
  src: [
    { unit: rare.LTower, amount: 1 },
    { unit: rare.STower, amount: 1 },
    { unit: magic.FTower, amount: 1 },
    { unit: normal.HTower, amount: 1 },
  ],
}

const QTowerComb = {
  dest: unique.QTower,
  src: [
    { unit: rare.NTower, amount: 1 },
    { unit: rare.UTower, amount: 1 },
    { unit: normal.CTower, amount: 1 },
  ],
}

const RTowerComb = {
  dest: unique.RTower,
  src: [
    { unit: rare.GTower, amount: 1 },
    { unit: rare.STower, amount: 1 },
    { unit: magic.DTower, amount: 1 },
  ],
}

const STowerComb = {
  dest: unique.STower,
  src: [
    { unit: rare.ATower, amount: 1 },
    { unit: rare.CTower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
  ],
}

const TTowerComb = {
  dest: unique.TTower,
  src: [
    { unit: rare.HTower, amount: 1 },
    { unit: rare.STower, amount: 1 },
    { unit: magic.FTower, amount: 1 },
  ],
}

const UTowerComb = {
  dest: unique.UTower,
  src: [
    { unit: rare.NTower, amount: 1 },
    { unit: rare.RTower, amount: 1 },
    { unit: magic.ATower, amount: 1 },
  ],
}

const VTowerComb = {
  dest: unique.VTower,
  src: [
    { unit: rare.OTower, amount: 1 },
    { unit: rare.QTower, amount: 1 },
  ],
}

const WTowerComb = {
  dest: unique.WTower,
  src: [
    { unit: rare.PTower, amount: 1 },
    { unit: rare.ITower, amount: 1 },
    { unit: magic.ETower, amount: 1 },
    { unit: normal.CTower, amount: 1 },
  ],
}

const XTowerComb = {
  dest: unique.XTower,
  src: [
    { unit: rare.RTower, amount: 1 },
    { unit: rare.VTower, amount: 1 },
  ],
}

const YTowerComb = {
  dest: unique.YTower,
  src: [
    { unit: rare.BTower, amount: 1 },
    { unit: rare.PTower, amount: 1 },
    { unit: magic.ATower, amount: 1 },
  ],
}

const ZTowerComb = {
  dest: unique.ZTower,
  src: [
    { unit: rare.ETower, amount: 1 },
    { unit: rare.GTower, amount: 1 },
    { unit: normal.ATower, amount: 1 },
  ],
}

const AATowerComb = {
  dest: unique.AATower,
  src: [
    { unit: rare.JTower, amount: 1 },
    { unit: rare.TTower, amount: 1 },
    { unit: magic.CTower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
  ],
}

const ABTowerComb = {
  dest: unique.ABTower,
  src: [
    { unit: rare.KTower, amount: 1 },
    { unit: magic.ETower, amount: 1 },
    { unit: normal.BTower, amount: 1 },
    { unit: normal.FTower, amount: 1 },
  ],
}

const ACTowerComb = {
  dest: unique.ACTower,
  src: [
    { unit: rare.DTower, amount: 1 },
    { unit: rare.VTower, amount: 1 },
    { unit: normal.ATower, amount: 1 },
  ],
}

const ADTowerComb = {
  dest: unique.ADTower,
  src: [
    { unit: rare.JTower, amount: 1 },
    { unit: rare.OTower, amount: 1 },
  ],
}

const uniqueTowerCombList = [
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
  WTowerComb,
  XTowerComb,
  YTowerComb,
  ZTowerComb,
  AATowerComb,
  ABTowerComb,
  ACTowerComb,
  ADTowerComb,
]

export default uniqueTowerCombList
