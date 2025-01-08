type AppendArgument<Fn extends (...args: any) => any, A> =
Fn extends (...args: infer V) => infer T
  ? (...args: [...V, A]) => T
  : never
