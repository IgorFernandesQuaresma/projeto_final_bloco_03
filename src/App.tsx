import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/home'
import PageCategorias from './pages/todasCategorias/todasCategorias'
import FormCategoria from './pages/crudCategorias/FormCategoria'
import DeletarCategoria from './pages/crudCategorias/Deletar'

function App() {
  

  return (
    <>

            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/categorias" element={<PageCategorias/>} />
                    <Route path="/formcategoria" element={<FormCategoria/>} />
                    <Route path="/formcategoria/:id" element={<FormCategoria/>} />
                    <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
    </>
  )
}

export default App
