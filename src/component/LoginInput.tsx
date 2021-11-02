import React, {ChangeEvent} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from '../notesReducer';
import { updateText } from '../actions';

interface NewNoteInputProps{
    addNote(note: string): void;
}

export const LoginInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  // const [note, setNode] = React.useState("")
  const dispatch = useDispatch()

  
  const name = useSelector<NotesState, NotesState["name"]>((state)=> state.name)  
  const onAddNewClick = () => {
      addNote(name)
      dispatch(updateText(''))
      // setNode("")
  }  
  const updateNote = (event: ChangeEvent<HTMLInputElement>)=> {
    dispatch(updateText(event.target.value))
      // setNode(event.target.value)
  }
  const login = useSelector<NotesState, NotesState["login"]>((state)=> state.login)
  const loading = useSelector<NotesState, NotesState["loading"]>((state)=> state.loading)
    
  if(login || loading) return null; 
  return <div className="mycenter">
    <div className="myinputdiv">
      Student Name: 
      <input onChange = {updateNote} value={name} className="myinput" type="text" />
    </div>
    <div>for example, Joe, Jenny, Sid</div>
    <button onClick = {onAddNewClick}>Login</button>
  </div>    
}