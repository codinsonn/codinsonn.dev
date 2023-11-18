export type Overwrite<T, U> = Omit<T, keyof U> & U

export type FlattenIfArray<T> = T extends (infer R)[] ? R : T
export type Unpromisify<T> = T extends Promise<infer R> ? R : T

export type HintedKeys = string & {} // eslint-disable-line @typescript-eslint/ban-types

export type any$Todo = any
