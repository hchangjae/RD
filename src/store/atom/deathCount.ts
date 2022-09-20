import { createAtom } from '@/store'

export const deathCountState = createAtom<number>({
  key: 'DeathCountState',
  default: 0,
})
