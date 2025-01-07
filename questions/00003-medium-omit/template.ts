// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }

// type _MyExclude<T, U> = T extends U ? never : T

// type MyOmit<T, K extends keyof T> = {
//   [key in _MyExclude<keyof T, K>]: T[key]
// }

// // 保留原有的 MyExclude
// type _MyExclude<T, U> = T extends U ? never : T

// 修改 MyOmit 实现，使用 Pick 来保留修饰符
// type MyOmit<T, K extends keyof T, V = _MyExclude<keyof T, K>> = {
//   [P in V]: T[P]
// }

// type MyPick2<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
