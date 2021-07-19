import React from 'react'
import {toggleImportantOf} from '../reducers/noteReducer'
import {useSelector, useDispatch} from 'react-redux'




export default function Notes() {

  const state = useSelector(state =>{
    if(state.filter === 'ALL'){
      return state.notes
    }

    return state.filter === 'IMPORTANT' 
    ? state.notes.filter( note => note.important )
    : state.notes.filter( note => !note.important )


  })
  const dispatch = useDispatch()
 

  const toggleImportant = (id)=>{
    dispatch(toggleImportantOf(id))
  }
    return (
        <ul>
        {
          state.map(note=>{
              return <li key={note.id} onClick={()=>toggleImportant(note.id)}>
                {note.content}
                <strong>
                  {note.important ? ' important' : ' not important'}
                </strong>
              </li>
          })
        }
      </ul>
    )
}
