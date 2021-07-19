import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { stateInit } from './reducers/noteReducer'
const App = ()=>{
  const dispatch = useDispatch()
  useEffect( ()=>{
    
    
    dispatch(stateInit())
    

  },[])
  
  const handlerFilter = (filterOf)=>{
    console.log(filterOf)
  }

  return (
    <>
      <NewNote/>
      <VisibilityFilter/>
      <Notes/>
    </>
  )
}

export default App;
