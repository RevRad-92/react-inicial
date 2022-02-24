const initialState = {
    all: []
}

const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'

export const setAllProducts = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        payload: products
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ALL_PRODUCTS: {
            return {
            ...state,
            all: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer
