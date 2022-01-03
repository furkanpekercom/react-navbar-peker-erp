import React, { useState } from 'react';
import { TekliflerAltMenuler } from './TekliflerAltMenuler';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function TekliflerDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {TekliflerAltMenuler.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TekliflerDropdown;
