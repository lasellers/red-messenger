const initialState = {
    isLoggedIn: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            const {user, isLoggedIn} = action.payload;
            return {
                ...state,
                user,
                isLoggedIn
            };
        }
        case 'REMOVE_USER': {
            const {user, isLoggedIn} = action.payload;
            return {
                ...state,
                user,
                isLoggedIn
            };
        }
        default:
            return state;
    }
}
