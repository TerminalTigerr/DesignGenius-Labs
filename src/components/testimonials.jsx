import React, { Component } from 'react';
import { brandbassador, bunny, canopees, davehall,demostatck, 
	diabetics, ethya, grow, helloTax, myshop, ossogas, 
	payKickstart, paymongo, winclex} from '../assets';
import BlueButton from './blueButton';
import { Slide } from 'react-reveal';


class Testimonials extends Component {
  render() {
    return (
      <section id='testimonials' className='bg-white relative'>
				<div className='flex flex-col justify-center items-start py-[50px] sm:py-30'>
					<div className='flex flex-col justify-center items-start space-y-5 px-6  sm:px-16'>
						<p className=' text-sm uppercase text-gray-800 font-poppins font-medium tracking-[7px]'>
							Testimonials
						</p>
						<h1 className='text-gray-800 font-poppins font-medium sm:text-5xl 
							sm:leading-snug text-4xl leading-tight'>
							What they said about us 
							<br className='sm:block hidden'/>from the people we shared
							<br className='sm:block hidden'/>experiences with.
						</h1>
					</div>
					<div className='flex flex-col justify-center items-start md:flex-row py-16 space-x-0 
						md:space-x-8 space-y-16 md:space-y-0 px-6 sm:py-10 sm:px-16'>
						<div className='flex flex-col justify-center items-start md:w-1/2 space-y-4'>
								<p className='text-black md:text-[28px] font-poppins text-[20px] sm:text-[24px]'>
									One Week Wonders team are just amazing. We have had some personal 
									websites and dashboards. The team always delivered on time. The best 
									quality with endless iterations. Good Job!
								</p>
								<div className='flex flex-col justify-center items-start space-y-3'>
									<h3 className='text-[32px] text-black font-poppins font-normal'>
										Nevo David
									</h3>
									<p className='text-[16px] text-gray-600 font-poppins'>
										CEO & Founder of Linvo
									</p>
								</div>
						</div>
						<div className='flex flex-col justify-center items-start md:w-1/2 space-y-4'>
								<p className='text-black md:text-[28px] font-poppins text-[20px] sm:text-[24px]'>
									One Week Wonders team are just amazing. We have had some personal 
									websites and dashboards. The team always delivered on time. The best 
									quality with endless iterations. Good Job!
								</p>
								<div className='flex flex-col justify-center items-start space-y-3'>
									<h3 className='text-[32px] text-black font-poppins font-normal'>
										Nevo David
									</h3>
									<p className='text-[16px] text-gray-600 font-poppins'>
										CEO & Founder of Linvo
									</p>
								</div>
						</div>
					</div>
					<div className='moving-element flex flex-row justify-between items-center overflow-hidden py-20 space-x-6'>
						<Slide 
							left
						>
							<img src={brandbassador} className='max-w-[200px]'/>
							<img src={bunny} className='max-w-[200px]'/>
							<img src={canopees} className='max-w-[200px]'/>
							<img src={davehall} className='max-w-[200px]'/>
							<img src={demostatck} className='max-w-[200px]'/>
							<img src={diabetics} className='max-w-[200px]'/>
							<img src={ethya} className='max-w-[200px]'/>
							<img src={grow} className='max-w-[200px]'/>
							<img src={helloTax} className='max-w-[200px]'/>
							<img src={myshop} className='max-w-[200px]'/>
							<img src={ossogas} className='max-w-[200px]'/>
							<img src={payKickstart} className='max-w-[200px]'/>
							<img src={paymongo} className='max-w-[200px]'/>
							<img src={winclex} className='max-w-[200px]'/>
						</Slide>
					</div>
				</div>

				
				<div className='flex justify-center items-center py-6 sm:py-16 px-0 sm:px-16'>
						<div className='flex flex-col justify-center items-center bg-[#041827] py-20 px-12 space-y-[70px] sm:rounded-[2rem]'>
							<p className='text-white text-[44px] font-poppins font-medium text-center'>
								Don’t be surprised at how stunning your project is once you have decided
							</p>
							<BlueButton />
						</div>
					</div>
      </section>
    );
  }
}

export default Testimonials;