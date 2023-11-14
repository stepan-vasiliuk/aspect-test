import {CHANGE_ELEMENT} from "./actionTypes";

export function changeElement(path, value) {
    return {
        type: CHANGE_ELEMENT,
        payload: {
            path: path,
            newValue: value,
        }
    }
}