import { createAtom } from '..'

export const deathCountState = createAtom<number>({
  key: 'DeathCountState',
  default: 0,
})
