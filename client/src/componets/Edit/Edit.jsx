import React, { useState, useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

function Edit() {
    let { id } = useParams();
    console.log(id);
    const [subject, setSubject] = useState('');
    const [details, setDetails] = useState('');
    const [DataErr, setDataErr] = useState('');
    const navigate = useNavigate()
    console.log(DataErr);
    useEffect(() => {
        featchData();
        function featchData(params) {
            feachData();
            async function feachData() {
                const responce = await fetch(`http://localhost:3001/blogByid/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                })
                const data = await responce.json()
                setSubject(data.allBlog.subject)
                setDetails(data.allBlog.details)

            }
        }
    }
        , [id])
    async function Upload() {
        console.log('here');

        const responce = await fetch(`http://localhost:3001/editBlog/${id}`, {
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

        if (data.status) {
            navigate('/')
        } else {
            setDataErr(data.message);

        }
        
    }
    return (
        <div>
            <div className="mainupload">
                <div className="container">
                    <h2>Edit Post</h2>

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
                    <Link to={'/'}>Go to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Edit