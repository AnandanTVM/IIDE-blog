import React, { useState } from 'react';
import './Upload.css';
function Upload() {

  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  async function Upload() {
    console.log('here');

    const responce = await fetch('http://localhost:3001/uploadBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        details,

      }),
    })

    const data = await responce.json()
    console.log(data);

    // if (data.status === 'error') {
    //   setDataErr(data)
    // } else {
    //   navigate('/');

    // }

  }
  return (
    <div className="mainupload">
      <div className="container">
        <h2>Post</h2>

        <form
          onSubmit={Upload}
        >
          <label>Subjet</label>
          <div className="group">
            <input type="text" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <label>Description</label>
          <div className="group">
            <textarea type="text" value={details} onChange={(e) => { setDetails(e.target.value) }}></textarea>
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <div>
            <button type="submit">Upload</button>
          </div>
        </form>

        <p className="footer"></p>
      </div>
    </div>
  );
}

export default Upload;
