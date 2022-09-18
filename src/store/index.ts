const store: Record<string, any> = {}

type Atom<T> = {
  key: string
  default: T
}

export const useState = <T extends unknown>(atom: Atom<T>) => {
  const value = store[atom.key] as T
  const setter = (newValue: T) => {
    store[atom.key] = newValue
  }
  return [value, setter]
}

export const useValue = <T extends unknown>(atom: Atom<T>) => {
  const value = store[atom.key] as T
  return value
}

export const useSetter = <T extends unknown>(atom: Atom<T>) => {
  const setter = (newValue: T) => {
    store[atom.key] = newValue
  }
  return setter
}

export const createAtom = <T extends unknown>(props: Atom<T>) => {
  const { key, default: d } = props
  store[key] = d
  return { ...props }
}
