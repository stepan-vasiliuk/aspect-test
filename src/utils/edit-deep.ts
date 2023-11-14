export type ComplicatedObject<T> = {
    [key: string]: T | ComplicatedObject<T> | ComplicatedObject<T>[];
};

export type ComplicatedEntity<T> = ComplicatedObject<T> | ComplicatedObject<T>[];

export function getEditedObj<T>(
    obj: ComplicatedEntity<T>,
    path: (string | number)[],
    value: T,
): ComplicatedEntity<T> {
    const key: string | number = path[0];

    // @ts-ignore
    if (!obj[key] && path.length > 1) {
        throw new Error("Path is incorrect");
    }

    // @ts-ignore
    const preparedValue: T | ComplicatedEntity<T> = path?.length === 1 ? value : getEditedObj(obj[key], [...path].splice(1), value);

    if (Array.isArray(obj)) {
        const preparedObj: ComplicatedEntity<T> = [...obj];

        // @ts-ignore
        preparedObj[key] = preparedValue;

        return preparedObj;
    }

    return {
        ...obj,
        [key]: preparedValue,
    };
}
