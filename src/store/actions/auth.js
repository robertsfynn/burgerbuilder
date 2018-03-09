import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSucess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, pw) => {
    console.log(email + " pw " +pw)
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: pw,
            returnSecureToken: true
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD25nikxlc7GigZPCodnJ6mc1gSoXVYRLg', authData)
        .then (response => {
            console.log(response)
            dispatch(authSucess(response.data))
        })
        .catch(err => {
            console.log(err)
            dispatch(authFail())
        })
    }
}