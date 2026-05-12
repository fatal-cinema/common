type NullToUndefined<T> = {
	[K in keyof T]: null extends T[K] ? Exclude<T[K], null> | undefined : T[K]
}

export const nullToUndefined = <T extends object>(obj: T): NullToUndefined<T> =>
	Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v ?? undefined])) as NullToUndefined<T>
