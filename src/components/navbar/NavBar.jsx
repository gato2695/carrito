import * as React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Paper from '@mui/material/Paper';

import './NavBar.css'

const NavBar = ({pageName}) => {
  return (
    <Paper elevation={15}>
      <div className='navbar'>
        <Link to="/" className="pageName">
          {pageName}
        </Link>
        <Link to="/Cart">
          <CartWidget/>
        </Link>
      </div>
    </Paper>
  );
}

export default NavBar