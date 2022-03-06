import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedback,handelDelete}) => {

    if (!feedback ||  feedback.length === 0){
        return <p>No Feedback Yet!</p>
    }

  return (
    <div className='feedbackList'>
        {feedback.map((item) => (
         <FeedbackItem
          key={item.id}
          handelDelete={handelDelete}
          item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList