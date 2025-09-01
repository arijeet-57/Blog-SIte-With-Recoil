import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { userAtom } from "../atoms/atoms";
import { useRecoilState } from "recoil";

export function LoginPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [ password, setPassword ] = useState("");

    const[user, setUser]= useRecoilState(userAtom);
    
    async function handleSubmit() {
        try {
            const res = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({username, password})
            });

            const data = await res.json();

            if(res.ok) {
                setUser({username: data.username , password: data.password});

                localStorage.setItem("username", data.username) //THis will only store the username if the backend sends it so be careful

                navigate("/WriteBlog");
            }else{
                alert(data.msg || "Login failed");
            };
        }catch(err) {
            alert("Error...Try again in a few minutes...")
        }
    }

    async function back() {
        navigate("/Register")
    }
    

    return(
        <div>
            <h1>Login</h1>
            <br />
            <label>Username</label>
            <br />
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br /><br />
            <label>Password</label>
            <br />
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleSubmit}>Login</button>
            <button onClick={back}>Back</button>
        </div>
    )
}