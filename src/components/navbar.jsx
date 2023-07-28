import React, { Component } from 'react';
import {logo} from '../assets'
import { navLinks } from '../helpers/static-texts';
import Button from './button';

class Navbar extends Component {
 
  render() {
    return (
      <nav className='flex justify-between items-start px-4 py-6'>
        <div className='relative flex flex-1 space-x-2 justify-start items-center logo-container'>
				  <img src={logo} alt="designGeniusLabs" className='relative w-auto h-auto cursor-pointer z-10 img'/>
          <p className={`text-white font-poppins font-bold transition-all duration-300 ease-in-out`}>
            DesignGenius <br /> Labs
          </p>
        </div>
        <div className={`flex justify-end items-center w-[70%]`}>
          <ul className='flex list-none space-x-10 mr-10 justify-between items-start'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className='font-poppins font-semibold text-white text-base'>
                <a href={link.id}>{link.title}</a>
              </li>
            ))}
          </ul>
          <Button 
          />
        </div>
			</nav>
    );
  }
}

export default Navbar;