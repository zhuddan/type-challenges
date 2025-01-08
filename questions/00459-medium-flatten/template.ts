// 1. [1, [2]]   []
// 5. [[2]]    [1]
// 8. [2], [1]
// 11 Flatten<[], [1,2]> => [1, 2]
type Flatten<U extends any[], T extends any[] = []> =
// 2. U extends [1 , ...[[2]] ] true
// 6. U extends [ [2] , ... ] true
// 9. U extends [2,...] true
U extends [infer X, ...infer Y] ?
// 3. 1 extends any[] => false
// 7. [2] extends any[] => true x [2] y [] t: [1]
// 10. 2 extends [...] false
  X extends any[]
  // 8. Flatten<[2], [1]>
    ? Flatten<[...X, ...Y], T>
    // 4 Flatten<[ [2] ],[1]>
    // 10 Flatten<[], [1,2]>
    : Flatten<[...Y], [...T, X ]>
  : T
