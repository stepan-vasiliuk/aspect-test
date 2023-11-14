export enum ValueTypes {
    Object = 'object',
    Number = 'number',
    String = 'string',
    Boolean = 'boolean'
}

export function getValueByType<T>(type: ValueTypes, value: unknown): T {
    let result: unknown = value;

    switch (type) {
        case ValueTypes.Boolean:
            result = String(value) === 'true';

            break;
        case ValueTypes.Number:
            result = Number(value);

            break;
        case ValueTypes.String:
            result = String(value);

            break;
        case ValueTypes.Object:
            result = getValidJson(String(result));
    }

    return result as T;
}

function getValidJson<T>(value: string): T {
    try {
        return JSON.parse(value);
    } catch (e) {
        return {} as T;
    }
}