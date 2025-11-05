import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Produto from './pages/produto/Produto'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/contato/Contato'

function App() { //Por que não consigo comentar dentro da função? De qualquer forma, Navbar, sobre, footer e produtos estão assim pq não importei
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


