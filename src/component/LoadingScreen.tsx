import React from "react";
import { useSelector } from 'react-redux';
import { NotesState } from '../notesReducer';

function LoadingScreen(){
  const loading = useSelector<NotesState, NotesState["loading"]>((state)=> state.loading)
  if(!loading) return null;
  return <div className="loading">
    waiting...
  </div>;
}
export default LoadingScreen;