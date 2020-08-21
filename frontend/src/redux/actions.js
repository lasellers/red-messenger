export const removeUser = status => ({
    type: 'REMOVE_USER',
    payload: {
        user: {},
        isLoggedIn: false
    }
});

export const addUser = user => ({
    type: 'ADD_USER',
    payload: {
        user: user,
        isLoggedIn: true
    }
});
