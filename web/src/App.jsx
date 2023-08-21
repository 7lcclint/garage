import './App.css'
import Login from './components/Login'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import CustomerProfile from './components/customers/CustomerProfile'

function App() {
  
  const token = window.localStorage.getItem('isLoggedIn');
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/login' element={token ? <HomePage/> : <Login />}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/' element={token ? <HomePage/> : <Login />}></Route>
      <Route path='user/:activepage' element={token ? <CustomerProfile/> : <Login />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
