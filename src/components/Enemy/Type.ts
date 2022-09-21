import Mob1 from '@/components/Enemy/mob1'
import Mob2 from '@/components/Enemy/mob2'

export type ConcreteEnemy = typeof Mob1 | typeof Mob2
