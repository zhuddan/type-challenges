type Space = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${Space}${infer Output}` | `${infer Output}${Space}`
  ? Trim<Output>
  : S
