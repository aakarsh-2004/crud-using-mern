import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [data, setData] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    const getSingleUser = async () => {
        const response = await fetch(`http://localhost:4000/${id}`);
        const result = await response.json();
        if(!response.ok) {
            console.log('error getting response ', result.error);
        };
        if (response.ok) {
            console.log(result);
            setData(result)
        }
    }
    useEffect(() => {
        getSingleUser()
    }, []);
    const handleChange = (e) => {
        setData((prevData) => {
            const {name, value} = e.target;
            return {
                ...prevData,
                [name]: value
            };
        });
    };
    const handleEdit = async (e) => {
        e.preventDefault()
        const {name, email, age} = data;
        const updatedUser = {name, email, age};
        const response = await fetch(`http://localhost:4000/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedUser),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const result = await response.json()
        if (!response.ok) {
            console.log(result.error);
        };
        if (response.ok) {
            console.log(result);
            navigate('/all');
        };
    };
    return (
        <div className="container">
            <form onSubmit={handleEdit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Name' 
                    value={data.name}
                    onChange={handleChange}
                    name='name'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder='Enter Email' 
                    value={data.email}
                    onChange={handleChange}
                    name='email'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Age' 
                    value={data.age}
                    onChange={handleChange}
                    name='age'
                    />
                </div>
                <button type='submit' className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}

export default Update