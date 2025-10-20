import './App.css';
import Welcom from './pages/Welcom';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import News from './pages/News';
import CategoryPage from './pages/CategoryPage';
import SelectPage from './pages/SelectPage';
import ProfilAcheteur from './pages/ProfilAcheteur';
import ProfilVendeur from './pages/ProfilVendeur';
import PrivacyPolicyPage from './vlog/PrivacyPolicyPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ProfilSell'element={<ProfilVendeur/>}/>
        <Route path='/ProfilBuy'element={<ProfilAcheteur/>}/>
        <Route path='/Category' element={<CategoryPage/>} />
        <Route path='/Select' element={<SelectPage/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicyPage/>} />
        <Route path='/About' element={<AboutPage/>} />
         <Route path='/Home' element={<Homepage/>} />
        <Route path='/Buy' element={<Register2/>} />
         <Route path='/Sell' element={<Register1/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Welcom/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
