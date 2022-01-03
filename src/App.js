import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Analiz from './components/pages/Analiz';
import Firsatlar from './components/pages/Firsatlar';
import Teklifler from './components/pages/Teklifler';
import Satislar from './components/pages/Satislar';
import Surecler from './components/pages/Surecler';
import Gorevler from './components/pages/Gorevler';
import Muhasebe from './components/pages/Muhasebe';
import Musteriler from './components/pages/Musteriler';
import Personel from './components/pages/Personel';
import Diller from './components/pages/Diller';
import Arsiv from './components/pages/Arsiv';
import Tercume from './components/pages/Tercume';
import Izin from './components/pages/Izin';
import Gorusoneri from './components/pages/Gorusoneri';
import Stajyer from './components/pages/Stajyer';
import Profil from './components/pages/Profil';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/analiz' component={Analiz} />
        <Route path='/firsatlar' component={Firsatlar} />
        <Route path='/teklifler' component={Teklifler} />
        <Route path='/satislar' component={Satislar} />
        <Route path='/surecler' component={Surecler} />
        <Route path='/gorevler' component={Gorevler} />
        <Route path='/muhasebe' component={Muhasebe} />
        <Route path='/musteriler' component={Musteriler} />
        <Route path='/personel' component={Personel} />
        <Route path='/arsiv' component={Arsiv} />
        <Route path='/diller' component={Diller} />
        <Route path='/tercume' component={Tercume} />
        <Route path='/izin' component={Izin} />
        <Route path='/gorus-oneri' component={Gorusoneri} />
        <Route path='/stajyer' component={Stajyer} />
        <Route path='/profil' component={Profil} />

      </Switch>
    </Router>
  );
}

export default App;
