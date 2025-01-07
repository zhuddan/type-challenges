type Tuple = readonly unknown[]

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U]

type _Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]
