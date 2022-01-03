import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FirsatlarDropdown from './FirsatlarDropdown';
import TekliflerDropdown from './TekliflerDropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (e) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ONAT-ERP 
          <i class="fab fa-react"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link
              to='/analiz'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Analiz
            </Link>
          </li>




          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Fırsatlar <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <FirsatlarDropdown />}
          </li>

          
          

          
          
          <li className='nav-item'>
            <Link
              to='/satislar'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Satışlar
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/surecler'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Süreçler
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/gorevler'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Görevler
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/muhasebe'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Muhasebe
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={(e)=> onMouseEnter(e)}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Teklifler <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <TekliflerDropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/musteriler'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Müşteriler
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Personel'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Personel
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/arsiv'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Arşiv
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/diller'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Diller
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/tercume'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Tercüme
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/izin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              İzin
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/gorus-oneri'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Görüş Öneri
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/stajyer'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Stajyer
            </Link>
          </li>
          <li>
            <Link
              to='/profil'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Profil
            </Link>
          </li>
          
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
