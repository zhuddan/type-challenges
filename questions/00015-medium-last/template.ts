type Last<T extends any[]> = T extends [...infer _A, infer Last] ? Last : never
