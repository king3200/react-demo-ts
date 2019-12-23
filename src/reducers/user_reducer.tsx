export interface LoginState {
    username: string;
    password: string;
}

export interface UserState {
    username: string;
    token: string;
}

export interface UserActionType {
    type: 'setUserData' | 'delUserData' | 'login';
    payload: UserState | LoginState;
}


const initState: UserState = {
    username: '',
    token: ''
}

const UserReducer = (state: object = initState, action: UserActionType): any => {
    switch (action.type) {
        case 'login':
            return { ...action.payload };
        case 'setUserData':
            return { ...action.payload };
        case 'delUserData':
            return { username: '', token: '' };
        default:
            return state;
    }
}

export default UserReducer;