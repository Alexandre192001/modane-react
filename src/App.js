import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {React} from 'react'
import Home from './components/pages/home'
import ContainerFull from './components/layout/containerFull'
import Navbar from './components/layout/navbar'
import Roupas from './components/pages/roupas'
import Contato from './components/pages/contato'
import Footer from './components/layout/footer'

export default function App() {
  return (
   <>
  <Router>
    <Navbar/>
    <ContainerFull>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Roupas" element={<Roupas/>}/>
          <Route path="/Contato" element={<Contato/>}/>
        </Routes>
      </ContainerFull>
      <Footer/>
  </Router>
   </>
  );
}

