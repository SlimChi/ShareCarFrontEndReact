import { createSlice } from '@reduxjs/toolkit';

import { getPayloadToken, isTokenValid, setToken } from './..//services/tokenServices';


const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      signIn: (state, action) => {
        const token = action.payload;
        state.token = token;
        const claims = getPayloadToken(token);
        const user = {
          username: claims.username,
          roles: claims.roles,
        };
        state.user = user;
        state.isAuthenticated = true;
        setToken(action.payload);
      },
        signOut: (state) => {
            localStorage.clear();
            sessionStorage.clear();
            state.isAuthenticated = false;
        },
    },
});


export const { signIn, signOut } = authenticationSlice.actions;

export const selectIsLogged = (state) => {
    console.log('isAuthenticated:', state.auth.isAuthenticated);
    return state.auth.isAuthenticated;
};

export const selectUser = (state) => {
    console.log('user:', state.auth.user);
    return state.auth.user;
};

export const selectToken = (state) => {
    console.log('token:', state.auth.token);
    return state.auth.token;
};

export const selectHasRole = (roles) => (state) => {
    const user = state.auth.user;
    if (!roles || roles.length === 0) return true;
  
    if (!user || !user.roles) return false;
  
    const hasRole = roles.every((role) => user.roles.includes(role));
  
    return hasRole;
  };
  


export default authenticationSlice.reducer;
