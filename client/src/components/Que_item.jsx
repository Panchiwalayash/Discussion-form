import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Que_item({ item }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const finduser = async () => {
      const res = await axios.get(`http://localhost:5000/api/user/${item.userId}`)
      setUser(res.data);
    }
    finduser()
  }, [])
  return (
    <div style={{ margin: "8px" }}>
      <Link
        className="list-group-item list-group-item-action flex-column align-items-start"
        to={`/question/${item._id}`}
      >
        <div className="d-flex w-100 justify-content-between" key={item._id}>
          <h5 className="mb-1" >{item.title}</h5>
        </div>
        <small className="overflow-hidden">{item.description}</small>
        <div className="mt-1">
          <h6 className='mb-2'>Questioned by {user.username}
            <span className="badge badge-secondary m-1 p-2">views:{item.views}</span>
          </h6>
        </div>
      </Link >
    </div >
  )
}
