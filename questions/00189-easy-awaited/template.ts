type MyAwaited<T> = T extends null | undefined ? T :
  T extends object & { then: (v: infer F) => any } ?
    F extends (v: infer V) => any ? MyAwaited<V>
      : never
    :
    T
