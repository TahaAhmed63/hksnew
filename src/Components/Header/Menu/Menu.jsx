// components/Menu.js
"use-client"
import Link from 'next/link';
import { useState } from 'react';

const Menu = ({ items }) => {
  return (
    <nav className='header-menu'>
      <ul className=''>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>{item.label}</Link>
                  
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
