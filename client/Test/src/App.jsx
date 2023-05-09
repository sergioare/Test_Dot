import { Route, Routes } from 'react-router-dom'
import {Login} from "./components/Login/login"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
