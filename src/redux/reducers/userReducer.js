const initialState = {
    username: '', 
    token: '',
    firstName: '',
}

const SET_LOGGED_USER = 'SET_LOGGED_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const setLoggedUser = (user) => {
    return {
        type: SET_LOGGED_USER,
        payload: user,
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGGED_USER: {
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                firstName: action.payload.firstName
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                ...initialState
            }
        }
        default: {
            return state
        }
    }
}

export default reducer