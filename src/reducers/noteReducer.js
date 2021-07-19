import { getAll, createNewNote } from '../services/notes'

export const noteReducer = (state = [], action) =>{
  if (action.type === '@note/initState'){
    return action.payload
  }
  if (action.type === '@note/created'){
    return [...state,action.payload]
  }
  if (action.type === '@note/toggle_important'){
    const {id} = action.payload
    return state.map(note=>{
      if(note.id === id){
        return{
          ...note,
          important:  !note.important 
        }
      }
      return note 
    })
  }
  return state
}

export const createNote = (content) =>{
  return async (dispatch) =>{
    const newNote = await createNewNote(content)
    dispatch({
      type:'@note/created',
      payload:newNote        
      }
    )
  }
}

export const toggleImportantOf = (id) =>{
  return {
    type: '@note/toggle_important',
    payload: {
    id:id
    }
  }
}


export const stateInit =  () =>{

  return async (dispatch) =>{
    const notes = await getAll()
    
    dispatch ({
      type: '@note/initState',
      payload: notes
      }
    )

  }
 
}