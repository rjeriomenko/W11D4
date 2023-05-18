//reducer + action creator + CONST

const RECEIVE_CART = "cart/RECEIVE_CART"

export const receiveCart = (itemId) => {
    return {
    type: RECEIVE_CART,
    itemId: itemId
    }
}

export default function cartReducer (state = {}, action) {
    Object.freeze(state);

    const newState = {...state}

    switch (action.type) {
        case RECEIVE_CART:
            // newState[action.itemId] = {
            //     id: action.itemId,
            //     count: 1
            // }
            // return newState
            let item = newState[action.itemId];
            let count = 1;
            if (item) {
                count = item.count + 1;
            }
            return {
                ...newState,
                [action.itemId]: {
                    id: action.itemId,
                    count: count
                }
            };
        default:
            return newState;
    }
}

