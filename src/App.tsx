import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import Sobre from './pages/sobre/Sobre'
import Produtos from './pages/produtos/Produtos'

function App() { //Por que não consigo comentar dentro da função? De qualquer forma, Navbar, sobre, footer e produtos estão assim pq não importei
  return (
    <>
      <BrowserRouter>
        //<Navbar /> 
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
