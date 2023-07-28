import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section id='home' 
				className='flex flex-col pt-12 px-8'>
          <div 
						className='flex flex-col justify-center items-start space-y-5'>
						<h1 
							className='text-white text-7xl font-medium font-poppins leading-tight'>
							One of the most important <br />pieces of the great product <br />experience is you.
						</h1>
						<p className='text-3xl text-white'>
							A creative agency that crafting a digital experience.
						</p>
					</div>
      </section>
    );
  }
}

export default Hero;