type Pop<T extends any[]> = T['length'] extends 0 ?
  T : T extends [...infer A, infer _] ? A : never
