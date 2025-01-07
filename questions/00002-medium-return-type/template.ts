type MyReturnType<T extends (...value: any[]) => any> = T extends (...value: any[]) => infer R ? R : never
