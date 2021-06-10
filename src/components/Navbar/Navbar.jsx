import React from 'react';
import { useDataValue } from '../../contex';
import './Navbar.scss';

const Navbar = () => {
  const { data, handleClick } = useDataValue();

  return (
    <nav className='navbar'>
      <ul>
        {data?.map((item) => (
          <li key={item.id} onClick={() => handleClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
