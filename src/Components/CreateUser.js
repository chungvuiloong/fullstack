import {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const navigate = useNavigate();
const [inputs, setInputs] = useState({});

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) =>({...values, [name]: value }));
}

const handleSubmit = (e) => {
    e.preventDefault();
    //Link to php mamp, folder api, 
    axios.post('http://localhost:8005/api/', inputs).then(function(response) {
        console.log(response.data);
        navigate("/");
    });

    console.log(inputs);
};
    return (
    <div>
        <h1>Create Users</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange}/>
            <br/>
            <label>Email:</label>
            <input type="text" name="email" onChange={handleChange}/>
            <br/>
            <label>Mobile:</label>
            <input type="text" name="mobile" onChange={handleChange}/>
            <br/>
            <button type="submit">Save</button>
        </form>
    </div>
    );
}