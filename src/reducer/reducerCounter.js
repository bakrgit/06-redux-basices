import { INCREMENT } from '../type/type'


//2-create reducer to set state and change it
export const reducerCounter = (state = { counter: 1 }, action) => {

    if (action.type === INCREMENT) {
        return { counter: state.counter + 1 }
    }
    if (action.type === "DECERMENT") {
        return { counter: state.counter - 1 }
    }
    if (action.type === "RESET") {
        return { counter: 0 }
    }

    return state;
}
