import apiFetch from '../apiFetch';

export const signIn = async ({ email, password }) => {
    return await apiFetch('api/auth/signin', {
        method: "POST",
        body: JSON.stringify({ email, password })
    })
}

export const SignOut = async () => {
    return await apiFetch('api/auth/signout', {
        method: "POST",
    })
}

export const session = async () => {
    return await apiFetch('api/auth/session', {
        method: "GET"
    })
}
