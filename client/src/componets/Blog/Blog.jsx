import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './Blog.css';
function Blog() {
  const [blog, setBlog] = useState('');
  
  // const [error, SetError] = useState('');
  useEffect(() => {
    feachData();
    async function feachData() {
      const responce = await fetch('http://localhost:3001/getAllBlog', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      })
      const data = await responce.json()
      setBlog(data.allBlog)

    }
  }, [])

  async function handleDelete(id) {
    console.log(id);
    const responce = await fetch(`http://localhost:3001/deleteBlogBYId/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    })
    const data = await responce.json()
    setBlog(data.allBlog)

  }


  return (
    <div>
      <div className="post-container">

        {blog ? <div>
          {blog.map((data, index) => {
            return (<><div className="post">
              <p className="date">{data.date}</p>
              <p></p>
              <h1>{data.subject}</h1>
              <div className="post-content">
                <p>
                  {data.details}
                </p><div><Link to={`edit/${data._id}`}>Edit</Link>
                  <button onClick={((e) => { handleDelete(data._id) })}>Delete</button></div>
              </div>

            </div><hr /></>);
          })} </div> : ''}


      </div>
    </div>
  );
}

export default Blog;
