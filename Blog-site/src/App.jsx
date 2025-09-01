import './App.css'
import { LoginPage } from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RegisterPage } from './components/Register'
import { RecoilRoot } from 'recoil'
import { WritePage } from './components/WriteBlog'
import { CalenderPage } from './components/Calendar'

function App() {
  return (
  <RecoilRoot>
    <BrowserRouter>
        <Routes>
            <Route path="/Register" element={<RegisterPage/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/WriteBlog" element={<WritePage/>}/>
            <Route path="/DayWiseBlogs" element={<CalenderPage/>}/>
            {/* <Route path="/Blogs" element={}/> */}
        </Routes>
    </BrowserRouter>
  </RecoilRoot>
  )
  
}

export default App
