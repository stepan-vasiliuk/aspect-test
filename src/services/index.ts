import {createStore} from "redux";
import {Reducer} from "./reducer";

export default function configureStore() {
    // @ts-ignore
    const store = createStore(Reducer);
    return store;
}