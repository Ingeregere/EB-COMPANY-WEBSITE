import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer';
import NosProduitsPage from './Pages/NosProduits.page';
import Home from './Pages/Home.page';
import NavbarPage from './Pages/Navbar.page';
function App() {
  return (
    <>
        <Router>
          <NavbarPage />
          <Routes>
              <Route path='/' exact element={<Home />} /> 
              <Route path='/realisations' exact element={<NosProduitsPage />} /> 
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;