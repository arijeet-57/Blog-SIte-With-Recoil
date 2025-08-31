import './App.css'
import { LoginPage } from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RegisterPage } from './components/Register'
import { RecoilRoot } from 'recoil'

function App() {
  return (
  <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/Register" element={<RegisterPage/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            {/* <Route path="/Home" element={}/>
            <Route path="/DayWiseBlogs" element={}/> */}
        </Routes>
    </BrowserRouter>
  </RecoilRoot>
  )
  
}

export default App
