import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Que_item from './Que_item'

export default function Trending() {
  const [question, setQuestion] = useState([])
  const [query, setQuery] = useState("")
  const [queryData, setQueryData] = useState([])
  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(`http://localhost:5000/api/question/all`)
      setQuestion(res.data)
    }
    fetchQuestion()
  }, [])
  useEffect(() => {
    const questionFilter = async () => {
      const res = await axios.get(`http://localhost:5000/api/question/filter?q=${query}`)
      setQueryData(res.data)
    }
    questionFilter()
  }, [query])
  return (
    <>
      <div className='container'>
        <div style={{ marginTop: "10px", width: "500px", display: "flex" }}>
          <input placeholder='Search' type="search" id="form1" class="form-control" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
          <button disabled className="btn btn-primary" style={{ marginLeft: "5px", backgroundColor: "blue" }}>Search</button>
        </div>
        <br />
        <div>
          {queryData.length == 0 ? "" : <>
            <h2 className=" m-2">Searched Question</h2>
            {queryData.map((item) => (
              <Que_item key={item._id} item={item} />
            ))}
          </>
          }
        </div>
        <h2 className="text-center m-2">Trending Question</h2>
        <br />
        {question.map((item) => (
          <Que_item key={item._id} item={item} />
        ))}

      </div>
    </>
  )
}
