const saladReducer = (state = {}, action) => {
    switch (action.type) {
        case "REQUEST_SALAD":
            return {
                ...state,
                isFetching: true,
                saladRequested: true
            }
        case "RECEIVE_SALAD":
            return {
                ...state,
                isFetching: false
            }
        case "UPDATE_ID_AND_NAME":
            return {
                ...state,
                salad: {
                    ...state.salad,
                    id: action.id,
                    name: action.name
                }
            }
        case "UPDATE_VEGETABLES_AND_MEAT":
            return {
                ...state,
                salad: {
                    ...state.salad,
                    vegetables: action.vegetables,
                    meat: action.meat
                }
            }
        case "UPDATE_URL" :
            return {
                ...state,
                salad: {
                    ...state.salad,
                    imgUrl: action.url
                }
            }       
        default:
            return state    
    }
}

export default saladReducer;