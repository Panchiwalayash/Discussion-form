import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Que_item from './Que_item';

export default function Que() {
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user._id;
    const [questionDetail, setQuestionDetail] = useState({ title: "", description: "" });
    const [question, setQuestion] = useState([])
    useEffect(() => {
        const fetchQuestion = async () => {
            const res = await axios.get(`http://localhost:5000/api/question/${userId}`)
            setQuestion(res.data)
        }
        fetchQuestion()
    }, [])
    const onChange = (e) => {
        setQuestionDetail({ ...questionDetail, [e.target.name]: e.target.value });

    }
    const submitHandler = async (e) => {
        const queDetail = {
            title: questionDetail.title,
            description: questionDetail.description,
            userId: user._id
        }
        try {
            const res = await axios.post('http://localhost:5000/api/question/create', queDetail)
            setQuestionDetail({ title: "", description: "" })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <h1 className="text-center m-2">Create a your questionDetail</h1>
                <div className="form-group">
                    <label htmlFor="title">Enter Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={questionDetail.title} name="title" onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Enter Description</label>
                    <textarea className="form-control" id="description" rows="3" value={questionDetail.description} onChange={onChange} name="description" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <br />
            <h2 className="text-center m-2">Question you had asked</h2>
            <br />
            {question.map((item) => (
                <Que_item key={item._id} item={item} user={user} />
            ))}
        </div>

    )
}

