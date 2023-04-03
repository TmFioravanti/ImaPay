import React from 'react';
import Logo from '../../assets/img/logotipo.svg'
import './NavBar.css'

import ListItem from './ListItem';

const NavBar = (props) => {
    const items = props.items;

    const ItemsList = items.map((item) =>
        <ListItem key={item.key} value={item} />);
    
    return (
        <nav className='nav'>
            <img src={Logo} alt="Logo" width='20%' />
            <ul>
                {ItemsList}
            </ul>
        </nav>
      );
}
 
export default NavBar;