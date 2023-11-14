import {content} from "../data/data";
import {CHANGE_ELEMENT} from "./actionTypes";
import {getEditedObj} from "../utils/edit-deep";
import {parsePath} from "../utils/path-parser";

export const initialState = {
    content: content,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ELEMENT:
            const path = parsePath(action.payload.path);
            return getEditedObj(state, path, action.payload.newValue);

        default:
            return state;
    }
}