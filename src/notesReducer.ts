import { Action } from "./actions"

export interface ClassData{
    Name: string,
    StudentNames: string,
}
export interface NotesState{
     notes: ClassData[],
     loading: boolean,
     login: boolean,
     name: string
}
const initialState = {
    notes: [],
    loading: false,
    login: false,
    name: ''
}
export const notesReducer = (state: NotesState = initialState, action: Action) => {
    switch(action.type){
        case "LOGIN": {            
            return {...state, login:true, loading: false, notes: action.payload}
        } 
        case "LOGOUT": {
            return {...state, login:false}
        }
        case "SHOW_LOADING": {
            return {...state, loading: true}
        }
        case "HIDE_LOADING": {
            return {...state, loading: false}
        }
        case "UPDATE_TEXT": {            
            return {...state, name: action.payload}
        }
        default:
            return state
    }
}