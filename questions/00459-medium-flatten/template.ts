type Flatten<U extends any[], T extends any[] = []> =
U extends [infer X, ...infer Y] ?
  X extends any[]
    ? Flatten<[...X, ...Y], T>
    : Flatten<[...Y], [...T, X ]>
  : T
