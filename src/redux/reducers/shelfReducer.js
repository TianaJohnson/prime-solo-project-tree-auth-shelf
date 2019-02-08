//shelf reducer, returns item on shelf - Tiana and Julie

const shelfReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ITEMS':
            return action.payload;
        case 'ADD_ITEMS':
            return action.payload;
        default:
             return state;
    }
};





export default shelfReducer;