import React, { Component } from 'react';
import {logo} from '../assets'
import { navLinks } from '../helpers/static-texts';
import Button from './button';

class Navbar extends Component {
  state = {
    isHovered: false,
  }

  handleMouseEnter = () => {
    this.setState({isHovered: true})
  }
  handleMoseLeave = () => {
    this.setState({isHovered: false})
  }
  render() {
    const {hoverText} = this.state
    return (
      <nav 
        className='flex justify-between items-center px-4 py-6'
      >
        <div 
          className='logo-container relative flex space-x-2 justify-center items-center'>
				  <img 
            src={logo} 
            alt="designGeniusLabs" 
            className=' w-full h-full cursor-pointer z-10'/
          >
          <span 
            className='hidden text-white text-base font-bold w-full h-full transition-all ease-in-out duration-300'>
            DesignGenius <br /> Labs
          </span>
        </div>

        {/**============ Nav Menu ==================*/}
        <div 
          className={`flex justify-end items-center w-[70%]`}>
          <ul 
            className='flex list-none space-x-10 mr-10 justify-between items-start'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className='font-poppins font-semibold text-white text-base hover:text-gray-400'>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <Button 
            hoverText={hoverText}
            hoverIn={this.handleMouseEnter}
            hoverOut={this.handleMoseLeave}
          />
        </div>
			</nav>
    );
  }
}

export default Navbar;