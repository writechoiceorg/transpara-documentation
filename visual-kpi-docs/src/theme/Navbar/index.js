import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import './styles.css';
import NavbarSecondLine from './Content/navbarSecondLine';

export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent />
      <hr className='navbar_line_break'/>
      <NavbarSecondLine/>
    </NavbarLayout>
  );
}
