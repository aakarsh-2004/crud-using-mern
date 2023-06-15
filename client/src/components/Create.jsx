import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        age: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData((element) => {
            const {name, value} = e.target
            return {
                ...element,
                [name]: value
            };
        });
        console.log(data);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, age} = data;
        const addUser = {name, email, age};
        const response = await fetch('http://localhost:4000', {
            method: 'POST',
            body: JSON.stringify(addUser),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const result = await response.json();
        if(!response.ok) {
            console.log('error getting response ', result.error);
        };
        if (response.ok) {
            console.log(result);
            navigate('/all')
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Name' 
                    onChange={handleChange}
                    value={data.name}
                    name='name'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder='Enter Email' 
                    onChange={handleChange}
                    value={data.email}
                    name='email'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Age' 
                    onChange={handleChange}
                    value={data.age}
                    name='age'
                    />
                </div>
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Create;