import React, { Component } from 'react';
import {close, logo, menu} from '../assets'
import { navLinks } from '../helpers/static-texts';
import Button from './button';

class Navbar extends Component {
  state = {
    toggle: false
  }
  handleMenuToggle = () => {
    this.setState((prev) => ({
      toggle: !prev.toggle
    }))
  } 
 
  render() {
    const toggleIcon = this.state.toggle ? close : menu
    return (
      <nav 
        className='relative flex justify-between items-center mt-5'>
        <div 
          className='relative flex justify-center items-center space-x-4' >
          <img src={logo} className='w-full h-full'/>
          <span 
            className='flex justify-center top-0 left-0 items-center text-white font-poppins font-bold text-lg
            h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out cursor-pointer'>
            DesignGenius<br /> Labs
          </span>
        </div>

        <div className='justify-end items-center w-[70%] hidden md:flex'>
          <ul className='flex list-none justify-start items-center mr-10 space-x-8'>
            {navLinks.map((link) => (
              <li key={link.id}
                className='font-poppins text-base text-white font-semibold'>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <Button />
        </div>
        
        {/**============= Hamburger Menu ========= */}
        <div className='md:hidden'>
          <img 
            src={toggleIcon} alt="hamburger menu" 
            className='w-[35px] h-[35px] object-contain cursor-pointer z-10'
            onClick={this.handleMenuToggle}
          />

          <div 
            className={`p-10 bg-white absolute right-0 left-0 justify-center flex-col 
            items-center space-y-10 ${this.state.toggle ? 'flex' : 'hidden'} z-10`}>
            <ul className='flex flex-col justify-center items-center space-y-10'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className='font-poppins text-gray-800 font-medium text-3xl'>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <a href='#' className='bg-blue-600 px-8 py-4 rounded-full text-white
              font-poppins text-base font-medium'>
              start a project?
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;