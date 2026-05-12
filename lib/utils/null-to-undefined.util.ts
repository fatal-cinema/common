export const nullToUndefined = <T extends object>(obj: T) =>
	Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v ?? undefined])) as T
