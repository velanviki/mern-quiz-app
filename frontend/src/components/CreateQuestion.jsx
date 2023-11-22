import React, { useState } from 'react'
import axios from 'axios'

const CreateQuestion = () => {

  const [question, setQuestion] = useState({
    'question': '',
    'option1': '',
    'option2': '',
    'option3': '',
    'answer': ''
  })


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log({
    //   'name': name,
    //   'value': value
    // })
    setQuestion((prevState) => ({
      ...prevState, [name]: value
    }))

  }

  const handleCreate = async () => {
    try {
      const response = await axios.post("http://localhost:5001/createQuestion", question);
      console.log(response);
  
      // Assuming the server returns a successful response status
      if (response.status === 200) {
        alert("Data created");
        setQuestion({
          'question': '',
          'option1': '',
          'option2': '',
          'option3': '',
          'answer': ''
        })

      } else {
        alert("Failed to create data");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while creating data");
    }
  };
  


  return (
    <div className='container col-md-4 mx-auto mt-5'>

      <div class="form-group">
        <input type="text" class="form-control" id="question" name='question' value={question.question} onChange={handleChange} placeholder="Enter Question" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="option1" name='option1' value={question.option1} onChange={handleChange} placeholder="Enter Option 1" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="option" name='option2' value={question.option2} onChange={handleChange} placeholder="Enter Option 2" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="option" name='option3' value={question.option3} onChange={handleChange} placeholder="Enter Option 3" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="answer" name='answer' value={question.answer} onChange={handleChange} placeholder="Anwer" />
      </div>

      <button type="submit" class="btn btn-primary" onClick={() => handleCreate()}>Create</button>

    </div>
  )
}

export default CreateQuestion;