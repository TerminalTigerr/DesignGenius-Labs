import React, { Component } from 'react';
import { hero_video } from '../assets';
import {Fade, Zoom} from 'react-reveal'

class Hero extends Component {
  render() {
    return (
      <section id='home' 
				className='relative flex flex-col px-8 sm:px-16 pt-2 sm:pt-8 bg-primary'>
          <div 
						className='flex flex-col justify-center items-start'>
						<h1 
							className='text-white text-5xl font-medium font-poppins sm:leading-tight sm:text-7xl xl:text-8xl'>
							One of the most important <br className='sm:block hidden'/>
							pieces of the great product <br className='sm:block hidden'/>
							experience is you.
						</h1>
						<p className='text-2xl text-white sm:text-3xl mt-10'>
							A creative agency that crafting a digital experience.
						</p>
					</div>

					<div className=' sm:mt-40 mt-20 sm:mb-40 mb-20'>
						<Zoom 
							bottom
						>
							<video id='hero' autoPlay loop className=' rounded-3xl'>
								<source src={hero_video}>
								</source>
							</video>
						</Zoom>
					</div>

					<div className='absolute bottom-0 left-0 right-0 bg-slate-40 z-20'/>
      </section>
    );
  }
}

export default Hero;