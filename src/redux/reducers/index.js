
const initialState = {
    myfavorites: {
        content: []
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                myfavorites: {
                    ...state.myfavorites,
                    content: [...state.myfavorites.content, action.payload]
                }
            }

        case "REMOVE_FROM_FAVORITE":
            return {
                ...state,
                myfavorites: {
                    ...state.myfavorites,
                    content: state.myfavorites.content.filter((_, i) => i !== action.payload)
                }
            }


        default:
            return state;
    }
}

export default mainReducer;
