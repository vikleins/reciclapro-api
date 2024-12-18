// import { useState } from 'react'
import './App.css'
// import Header from './components/Header/Header'
// import CompanyCard from './components/Company/CompanyCard'
import {Route, Routes, Navigate} from 'react-router-dom'
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Appointments from './components/Appointments';


function App() {
  // const [count, setCount] = useState(0)
  const user = localStorage.getItem("token")

  return (
    <Routes>
    {/* <Header />
    <CompanyCard /> */}
      <Route path="/" exact element={<Main user={user} />} />
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />

      <Route path="/sobre-nos" exact element={<AboutUs user={user} />} />
      <Route path="/agendamentos" exact element={<Appointments user={user} />} />
    </Routes>
  )
}

export default App
