import React from "react";
import { useSelector } from 'react-redux';
import { ClassData, NotesState } from '../notesReducer';

interface LogOutInterface{
  logout(): void;
}

export const MainContent: React.FC<LogOutInterface> = ({ logout }) => {  
  const login = useSelector<NotesState, NotesState["login"]>((state)=> state.login)
  const notes = useSelector<NotesState, NotesState["notes"]>((state)=> state.notes)  
  
  if(!login) return null; 
  
  return <div className="mycenter">    
      <ul className="myul">        
        {notes.map((note: ClassData) => (
          <li className="myli" key={note.Name}>
            <div className="title">Name</div>            
            <div className="divname">{note.Name}</div>
            <div className="title">Students</div>      
            {note.StudentNames}
          </li>
        ) )}
      </ul>    
    <button className="btn_logout" onClick = {logout}>Logout</button>
  </div>    
}