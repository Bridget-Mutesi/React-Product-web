import React, {useState} from "react";
import './style.css';


const Login = ()=>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        console.log({data});
    
    }

    return(
        <div className="log">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <input placeholder="Enter username" type="text"
                onChange={(e)=>setUsername(e.target.value)}
                />
                <br/>
                <br/>
                <input placeholder="Enter password" type="password"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/>
                <br/>
                <button type="submit">login</button>
            </form>
        </div>
    )
}
export default  Login;