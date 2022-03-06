import React from 'react'
import {FaTimes} from 'react-icons/fa'


import Card from './shared/Card'


const FeedbackItem = ({item,handelDelete}) => {
   
  return (
    
       <Card reverse={false}>
        <div className='num-display'>{item.rating}</div>
        <button
        className='close'
        onClick={() => handelDelete(item.id)}
        >
            <FaTimes color='purple'/>
            </button>
        <div className='text-display'>{item.text}</div>
       </Card>
       
  
  )
}

export default FeedbackItem