import React from 'react';
import { Link } from 'react-router-dom';
import {GrMenu} from  'react-icons/gr';

const headerStyle = { color: 'inherit', textDecoration: 'inherit'};
const Header = () => {
	return (
    <div className='container'>
      <div className='left-col'>
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
        <p class='logo'>Logo</p>
        <GrMenu />
      </header>
    </div>
  );
}

export default React.memo(Header);
