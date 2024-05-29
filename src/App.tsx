import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import Home from './assets/pages/home/home'

function App() {
  

  return (
    <>

            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
    </>
  )
}

export default App
