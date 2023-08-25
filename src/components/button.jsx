import React, { Component } from 'react';

class Button extends Component {
  render() { 
    return (
      <a href='#' 
 				className='bg-white px-10 py-4 rounded-full font-poppins w-[205px] h-[55px] relative flex 
				justify-center items-center font-medium text-gray-800 hover:scale-[1.02] transition 
				duration-300 ease-out overflow-hidden group'
				
				
			>
				{/*<span 
					className='absolute items-center justify-center w-full h-full text-white duration-300
					translate-x-full group-hover:translate-x-0 ease' 
				>
					Send Inquiry!
				</span> */}
				<span
					className='absolute flex items-center justify-center w-full h-full transition-all ' 
				>
					Start a Project?
				</span> 
			</a>
    );
  }
}

export default Button;