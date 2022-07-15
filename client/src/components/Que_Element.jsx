import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Que_Element() {
  const [data, setData] = useState({})
  const params = useParams()
  useEffect(() => {
    const Detail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/question/viewed/${params.id}`)
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    Detail()
  }, [1])
  return (
    <div className='container' style={{ marginTop: "20px", backgroundColor: "lightgrey", borderRadius: "10px" }}>
      <h1 className="mb-1" >{data.title}</h1>
      <h3 className="overflow-hidden">{data.description}</h3>
    </div>
  )
}

