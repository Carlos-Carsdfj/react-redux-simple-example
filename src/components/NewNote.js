import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
export default function NewNote() {
  const dispatch = useDispatch()

  const submit = async (ev)=>{
    ev.preventDefault()
    const {target} = ev
    const content = target.note.value
    target.note.value =''
    
    dispatch(createNote(content))
  }


  return (
    <form onSubmit={submit}>
        <input type='text' name='note'/>
        <button>Send</button>
    </form>
  )
}
