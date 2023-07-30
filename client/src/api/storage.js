export const saveToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value)
}

export const loadFromSessionStorage = (key) => {
    return sessionStorage.getItem(key)
}
