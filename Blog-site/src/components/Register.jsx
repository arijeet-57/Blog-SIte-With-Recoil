import { useNavigate } from "react-router-dom"

export function RegisterPage() {

    const navigate = useNavigate();

    
    

    return(
        <div>
            <h1>Register</h1>
            <br />
            <label>Username</label>
            <input type="text" placeholder="username" />
            <br /><br />
            <label>Password</label>
            <input type="text" placeholder="password" />
            <br /><br />
            <button>Submit</button>
        </div>
    )
}