import React, { useEffect, useState } from 'react'
import axios from 'axios'


const EditQuestion = () => {

  const [datas, setDatas] = useState([])
  const [counter, setCounter] = useState(0)
const[select,setSelect] = useState('')
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

  const handleUpdate = async (id) => {
    try {
      const update = await axios.put(`http://localhost:5001/updateQuestion/${id}`, question);
      console.log(question);
      setCounter(counter + 1)
      if (update) {
        alert("Question updated successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const isDelete = await axios.delete(`http://localhost:5001/deleteQuestion/${id}`);
     setQuestion({
      'question': '',
    'option1': '',
    'option2': '',
    'option3': '',
    'answer': ''
     })
      setCounter(counter + 1)
      if (isDelete) {
        console.log("Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const handleSelect = async (item) => {
    await axios.get(`http://localhost:5001/getQuestion/${item}`).then((res) => {
      setQuestion({
        'question': res.data.question,
        'option1': res.data.option1,
        'option2': res.data.option2,
        'option3': res.data.option3,
        'answer': res.data.answer
      })
      setSelect(item)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:5001/getQuestions").then((res) => {
      setDatas(res.data)
      // console.log(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [counter])

  return (
    <>
      <div className='container d-flex'>
        <div className='contaner col-md-6 mx-auto mt-5'>
          <ul class="list-group">
            {
              datas?.map((item) => (
                <div key={question.id}>
                  <li class="list-group-item">{item.question}
                    {/* <a className='btn btn-outline-warning' style={{marginLeft:'5%'}} onClick={()=>handleSelect(item._id)}>Edit</a> */}
                    <a href="#" className='btn btn-outline-warning' style={{ marginLeft: '5%' }} onClick={(e) => {
                      e.preventDefault();
                      handleSelect(item._id);
                    }}
                    >
                      Edit
                    </a>

                    <a className='btn btn-outline-danger' style={{ marginLeft: '5%' }} onClick={()=>handleDelete(item._id)}>Delete</a>

                  </li>
                </div>
              ))
            }
          </ul>
        </div>

        <div className='container col-md-6 mx-auto mt-5'>
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

          <button type="submit" class="btn btn-primary" onClick={() => handleUpdate(select)}>Update</button>
        </div>


      </div>
    </>
  )
}

export default EditQuestion