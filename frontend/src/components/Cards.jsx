import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cards = () => {

    const [datas, setDatas] = useState([]);
    const [select, setSelect] = useState(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        axios.get("https://mern-quiz-ghma.onrender.com/getQuestions").then((res) => {
            setDatas(res.data)

            // console.log(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [index])

    const handleSelect = (selected) => {
        setSelect(selected)
        console.log(selected)
    }

    const handleCheck = (answer) => {
        if (answer === select) {
            alert("Correct Answer")
            setIndex(index + 1)

        } else {
            alert("Wrong Answer")

        }
        setSelect(null)

    }

    return (
        <>
            <div className="col-md-4 mx-auto" style={{ marginTop: "12%" }}>
                <div className='card' style={{ width: '30rem' }}>
                    <div className="card-body">
                        {
                            datas[index] ? <>
                                <h5 className="card-title">{datas[index]?.question}</h5>
                                <p className='card-text'>
                                    <div className="form-check" onClick={() => handleSelect(datas[index]?.option1)}>

                                        <input
                                            type="radio"
                                            id="customRadio1"
                                            name="customRadio"
                                            className="form-check-input"
                                            value={datas[index]?.option1}
                                            checked={select === datas[index]?.option1}
                                            onChange={() => handleSelect(datas[index]?.option1)}
                                        />
                                        <label className="form-check-label" htmlFor="customRadio1">{datas[index]?.option1}</label>

                                    </div>
                                </p>
                                <p className='card-text'>
                                    <div className="form-check" onClick={() => handleSelect(datas[index]?.option2)}>

                                        <input
                                            type="radio"
                                            id="customRadio1"
                                            name="customRadio"
                                            className="form-check-input"
                                            value={datas[index]?.option2}
                                            checked={select === datas[index]?.option2}
                                            onChange={() => handleSelect(datas[index]?.option2)}
                                        />
                                        <label className="form-check-label" htmlFor="customRadio1">{datas[index]?.option2}</label>

                                    </div>
                                </p>
                                <p className='card-text'>
                                    <div className="form-check" onClick={() => handleSelect(datas[index]?.option3)}>

                                        <input
                                            type="radio"
                                            id="customRadio1"
                                            name="customRadio"
                                            className="form-check-input"
                                            value={datas[index]?.option3}
                                            checked={select === datas[index]?.option3}
                                            onChange={() => handleSelect(datas[index]?.option3)}
                                        />
                                        <label className="form-check-label" htmlFor="customRadio1">{datas[index]?.option3}</label>

                                    </div>
                                </p>
                                <div>
                                    <a href="#" className="btn btn-primary" onClick={() => handleCheck(datas[index]?.answer)}>Next</a>
                                </div>

                            </> :

                                // <div>
                                //     <p className='text'>Congratulations!!!</p>
                                //     <a href="#" className="btn btn-primary" onClick={() => (setIndex(0))}>Try Again</a>
                                // </div>
                                <div>
                                    <p className='text'>Congratulations!!!</p>
                                    <a
                                        href="#"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            // Show the message for 2 seconds and then reset the index
                                            setTimeout(() => {
                                                setIndex(0);
                                            }, 2000); // 2000 milliseconds (2 seconds)
                                        }}
                                    >
                                        Try Again
                                    </a>
                                </div>


                        }

                    </div>
                </div>
            </div>
        </>

    )
}

export default Cards