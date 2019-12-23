export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USERDATA = 'SET_USERDATA';
export const DEL_USERDATA = 'DEL_USERDATA';
export const FETCH_PERMISSIONS = 'FETCH_PERMISSIONS';

export interface ActionType {
    type: string;
    payload: object;
}

export function setUserData(username: string, token: string): ActionType {
    return {
        type: SET_USERDATA,
        payload: { username, token }
    };
}

export function login(username: string, password: string): ActionType {
    return {
        type: LOGIN,
        payload: { username, password }
    };
}

export function logout(): ActionType {
    return {
        type: LOGOUT,
        payload: {}
    };
}

export function delUserData(): ActionType {
    return {
        type: DEL_USERDATA,
        payload: {}
    };
}

export function fetchPermission(): ActionType {
    return {
        type: FETCH_PERMISSIONS,
        payload: {}
    };
}