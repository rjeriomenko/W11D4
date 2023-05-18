import produceData from "../mockData/produce.json"

const POPULATE = "produce/POPULATE";

export default function produceReducer(state = {}, action) {
    Object.freeze(state)
    const newState = { ...state };

    switch (action.type) {
        case POPULATE:
            action.produce.forEach((ele) =>{
                newState[ele.id] = ele;
            })
            return newState;
        default:
            return state;
    }
}

//action creator
export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
};