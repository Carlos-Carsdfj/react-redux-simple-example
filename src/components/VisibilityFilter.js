import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

export default function VisibilityFilter() {

  const dispatch = useDispatch()

  return (
    <div>
      <strong>all</strong>
      <input type='radio' name='filter' value='ALL' onChange={ () => dispatch(filterChange('ALL'))} />
      <strong>important</strong>
      <input type='radio' name='filter' value='IMPORTANT' onChange={()=> dispatch(filterChange('IMPORTANT'))} />
      <strong>not important</strong>
      <input type='radio' name='filter' value='NO_IMPORTANT' onChange={()=> dispatch(filterChange('NOTIMPORTANT'))} />
    </div>
  )
}
