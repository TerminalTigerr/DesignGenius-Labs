import React, { Component } from 'react';

class Button extends Component {
  render() { 
    return (
      <a href='#' className='bg-white px-10 py-4 rounded-full font-poppins w-[205px] h-[60px] relative
				font-medium text-gray-800 hover:scale-[1.02] transition-all duration-400 ease-in-out'>
				<span className='text-change'>
					{this.props.hoveredText}</span>
			</a>
    );
  }
}

export default Button;