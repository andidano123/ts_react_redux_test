import { ClassData } from "./notesReducer"

export type Action  = {type: string, payload: ClassData[] | any}

export const logIn = (note: ClassData[]):Action => ({
    type: "LOGIN", payload: note
})
export const logOut = ():Action => ({
    type: "LOGOUT", payload: ''
})
export const showLoading = ():Action => ({
    type: "SHOW_LOADING", payload: ''
})
export const hideLoading = ():Action => ({
    type: "HIDE_LOADING", payload: ''
})
export const updateText = (note: string):Action => ({
    type: "UPDATE_TEXT", payload: note
})