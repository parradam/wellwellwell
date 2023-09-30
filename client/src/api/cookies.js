import Cookies from 'js-cookie'

export const logOutUser = () => {
    Cookies.remove('auth')
}

export const isUserLoggedIn = () => {
    return Cookies.get('auth')
}
