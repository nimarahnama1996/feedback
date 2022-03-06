import React, { useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

const FeedbackForm = ({handelAdd}) => {

  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')


  const handelTextChange = (e) => {

    if (text === ''){
      setBtnDisabled(true)
      setMessage(null)
    }else if (text !== '' && text.trim().length < 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }else{
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback ={
        text,
        rating
      }
      handelAdd(newFeedback);

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>How would you rate your service with us? </h2>
        <RatingSelect select={(rating) =>setRating(rating)}/>
        <div className='input-group'>
          <input type='text'
           placeholder='Write a review'
           value={text}
           onChange={handelTextChange}
            />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
          </div>

          {message &&  <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm