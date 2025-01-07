type MyReadonly2<T, K extends keyof T = keyof T> = MyOmit<T, K> & {
  readonly [P in K]: T[P]
}
