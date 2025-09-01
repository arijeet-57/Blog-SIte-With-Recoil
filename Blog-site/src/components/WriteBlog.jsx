import { useRecoilState } from "recoil";
import { blogAtom } from "../atoms/atoms";
import { data, useNavigate } from "react-router-dom";
import { forwardRef, useEffect, useState } from "react";

export function WritePage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const [blog, setBlog] = useRecoilState(blogAtom);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if(storedUsername) {
            setUsername(storedUsername)
        }
    }, [])

    async function handleSubmit() {
        try {
            const res = await fetch("http://localhost:4000/write", {
                method: "POST",
                headers: { "Content-type" : "application/json"},
                body: JSON.stringify({
                    title,
                    description,
                    date: new Date().toISOString().split("T")[0]
                })
            })

            const data = await res.json();
            setMessage(data.msg);

            if(data.msg === "Entry done") {
                 setTitle("");
                setDescription("");

                setBlog((prev) => [...prev, {title, description, username, date: new Date().toISOString().split("T")[0] }]);
            }
        }catch(err){
         return setMessage("Error 404");
        }
    }

    function forward() {
        navigate("/Blogs")
    }


    return (
        <div>
            {username && <h1>Write a Blog {username}</h1>}
            <br /><br />
            <label>Title</label>
            <br />
            <input placeholder="Blog title"  value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <br />
            <label>Description</label>
            <br />
            <textarea type="Write your blog description here..." rows={10} cols={50} value={description} onChange={(e) => setDescription(e.target.value)} />
            <br /><br />
            {message && <p>{message}</p>}
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={forward}>Blogs</button>
        </div>
    )
}