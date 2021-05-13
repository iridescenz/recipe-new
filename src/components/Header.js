import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GrMenu} from  'react-icons/gr';

const headerStyle = { color: 'inherit', textDecoration: 'inherit'};
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState('none')
	return (
    <div className='container'>
      <div className='left-col' style={{display: toggleMenu}}>
        <nav>
          <ul>
            <li>
              <Link to='/' style={headerStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/low-carb-recipes' style={headerStyle}>
                Low-carb recipes
              </Link>
            </li>
            <li>
              <Link to='/nutrition-facts' style={headerStyle}>
                Nutrition facts
              </Link>
            </li>
            <li>
              <Link to='/recipe-search' style={headerStyle}>
                Recipe search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <header>
        <p className='logo'>Logo</p>
        <GrMenu onClick={() => toggleMenu ==='none' ? setToggleMenu('block') : setToggleMenu('none')}/>
      </header>
    </div>
  );
}

export default React.memo(Header);
