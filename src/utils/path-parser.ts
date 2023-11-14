// export function parsePath(path: string): (string | number)[] {
//     return path.split('.')
//         .flatMap((part: string) => part.includes('[') ? part.slice(0, -1).split('[') : [part] )
//         .map((part: string) => isNaN(Number(part)) ? part : Number(part) );
// }

export function parsePath(path: string): (string | number)[] {
    return path.split('.')
        .flatMap((part: string) => {
            const [key, index]: string[] = part.split('[');
            const result: string[] = [];

            if (key) {
                result.push(key);
            }

            if (index) {
                result.push(index.slice(0, -1));
            }

            return result;
        })
        .map((part: string) => isNaN(Number(part)) ? part : Number(part));
}
