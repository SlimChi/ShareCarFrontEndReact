import jwt_decode from 'jwt-decode';

const TOKEN_NAME = 'token';

export function setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
}


export function getToken() {
    return localStorage.getItem(TOKEN_NAME);
}

/**
 * Delete the token from the localstorage
 *
 * @author Peter Mollet
 */
export function removeToken() {
    localStorage.removeItem(TOKEN_NAME);
}

/**
 * Get the payload of the JWT Token (with experition date, login and roles)
 *
 * @return {object} payload of the token
 * @author Peter Mollet
 */
export function getPayloadToken(token) {
    try {
        const payload = jwt_decode(token);
        return payload;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}


export function isTokenValid(token) {
    try {
        const payload = getPayloadToken(token);
        const roles = payload.auth.split(',');
        const expirationDate = payload.exp * 1000;  
        const dateNow = Date.now();  
        return token && roles.length > 0 && expirationDate > dateNow;
    } catch {
        return false;
    }
}

