import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState();
    const getData = async () => {
        const response = await fetch('http://localhost:4000');
        const result = await response.json();
        if (!response.ok) {
            console.log('error getting response ', result.error);
        };
        if (response.ok) {
            setData(result);
            console.log(data);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:4000/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        if (!response.ok) {
            console.log('error getting response ', result.error);
        };
        if (response.ok) {
            console.log('hemlo');
            setData("");
        };
    };
    return (
        <div className='alldata'>
            {data && data.map((ele) => {
                return (
                    <div className="card" style={{ "width": "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                            <p className="card-text">{ele.age}</p>
                            <Link to={`/${ele._id}`} className="card-link">Edit</Link>
                            <a href="" className="card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                        </div>
                    </div>
                )
            })}

        </div>

    )
}

export default Read