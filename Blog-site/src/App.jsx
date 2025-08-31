import './App.css'
import { LoginPage } from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RegisterPage } from './components/Register'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Register" element={<LoginPage/>}/>
            <Route path="/Login" element={<RegisterPage/>}/>
            <Route path="/Home" element={}/>
            <Route path="/DayWiseBlogs" element={}/>
        </Routes>
    </BrowserRouter>
  )
  
}

export default App
