import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './Data/FeedbackData'



function App() {

    const [feedback,setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure?')){
          setFeedback(feedback.filter((item) => item.id !== id))
      }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    return(
        <div>
        <Header/>
        <div className='container'>
            <FeedbackForm handelAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
           <FeedbackList  feedback={feedback} handelDelete={deleteFeedback} />
        </div>

        </div>
    )
}



export default App