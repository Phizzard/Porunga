export declare function get<T, A extends keyof NonNullable<T>>(
  obj: T,
  path1: A
): NonNullable<T>[A] | undefined
export declare function get<
  T,
  A extends keyof NonNullable<T>,
  B extends keyof NonNullable<NonNullable<T>[A]>
>(obj: T, path1: A, path2: B): NonNullable<NonNullable<T>[A]>[B] | undefined
export declare function get<
  T,
  A extends keyof NonNullable<T>,
  B extends keyof NonNullable<NonNullable<T>[A]>,
  C extends keyof NonNullable<NonNullable<NonNullable<T>[A]>[B]>
>(
  obj: T,
  path1: A,
  path2: B,
  path3: C
): NonNullable<NonNullable<NonNullable<T>[A]>[B]>[C] | undefined
