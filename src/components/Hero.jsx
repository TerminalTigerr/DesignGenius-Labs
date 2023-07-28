import React, { Component } from 'react';
import { hero_video } from '../assets';

class Hero extends Component {
  render() {
    return (
      <section id='home' 
				className='flex flex-col sm:px-5 mt-5 sm:mt-12'>
          <div 
						className='flex flex-col justify-center items-start'>
						<h1 
							className='text-white text-5xl font-medium font-poppins leading-tight sm:text-7xl xl:text-8xl'>
							One of the most important <br className='sm:block hidden'/>
							pieces of the great product <br className='sm:block hidden'/>
							experience is you.
						</h1>
						<p className='text-2xl text-white sm:text-3xl mt-10'>
							A creative agency that crafting a digital experience.
						</p>
					</div>

					<div className=' sm:mt-40 mt-20'>
						<video id='hero' autoPlay loop className=' rounded-3xl'>
							<source src={hero_video}>
							</source>
						</video>
					</div>
      </section>
    );
  }
}

export default Hero;