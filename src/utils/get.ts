export function get<T, A extends keyof NonNullable<T>>(
  obj: T,
  path1: A
): NonNullable<T>[A] | undefined

export function get<
  T,
  A extends keyof NonNullable<T>,
  B extends keyof NonNullable<NonNullable<T>[A]>
>(obj: T, path1: A, path2: B): NonNullable<NonNullable<T>[A]>[B] | undefined

export function get<
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

/**
 * get
 *
 * Before you run and tell the authorities about this function, let me explain what's happening here.
 * This function is an implementation of `lodash.get`, but enforces type safety. Because 'n' number of nested
 * object properties doesn't play nice with the TS compiler, we need an overloaded function signature for
 * every level deep to check in an object (otherwise you'd have to write a ton of && short circuits for every
 * nested element). The resulting JS lib code will be just the function below. You can see a similar implementation
 * with the rxjs pipe function: https://github.com/ReactiveX/rxjs/blob/master/src/internal/util/pipe.ts
 *
 * @param {any} obj the object to check the paths against
 * @param {string[]} props the list of nested object properties to check
 */
export function get(obj: any, ...props: string[]): any {
  return (
    obj &&
    props.reduce(
      (result, prop) => (result == null ? undefined : result[prop]),
      obj
    )
  )
}
