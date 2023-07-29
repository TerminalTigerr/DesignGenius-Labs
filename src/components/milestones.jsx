import React, { Component } from 'react';
import { milestones } from '../helpers/static-texts';

class Milestones extends Component {
  render() {
    return (
      <section id='milestone' className='relative bg-[#F5F7FC] rounded-b-2xl'>
				<div className='w-full flex flex-col px-12 py-16 sm:p-32 justify-center items-start  bg-[#F5F7FC] rounded-b-2xl'>
					<div className='flex flex-col justify-center items-start space-y-5' >
						<h4 className=' text-sm uppercase text-gray-800 font-poppins font-medium tracking-[7px]'>
							Milstones
						</h4>
						<p className='text-gray-800 font-poppins font-medium sm:text-5xl sm:leading-snug text-4xl leading-tight'>
							Stand aware of<br className='sm:block hidden'/> accomplishments, stay
							<br className='sm:block hidden'/> 
							awake to achieve more.
						</p>
					</div>
					<div className='flex flex-1 flex-col sm:flex-row justify-center items-start 
						mt-16 sm:mt-24 sm:space-y-0 space-y-20 sm:space-x-20'>
						{milestones.map((milestone) => (
							<div className='flex flex-col justify-start items-start space-y-8'>
								<h2 className='font-poppins font-medium text-gray-800 text-7xl'>
									{milestone.number}
								</h2>
								<p className='font-semibold font-poppins text-lg text-gray-800'>
									{milestone.title}
								</p>
								<p className='max-w-[300px] font-poppins text-base text-gray-600'>
									{milestone.content}
								</p>
							</div>
						))}
					</div>
							
					<div className='flex flex-col justify-center items-start mt-16 sm:mt-24 space-y-16'>
						<p className='font-poppins font-normal ss:text-2xl text-xl sm:text-3xl sm:leading-relaxed'>
							Our clients are companies, brands and statups 
							that keep the world going around.
						</p>
						<p className='font-poppins font-normal ss:text-2xl text-xl sm:text-3xl sm:leading-relaxed'>
							They treat diseases, move parcels, insure cars, process payments, 
							create jobs, rent homes and publish news. They are vast and complex 
							businesses requiring design experiences that are just as {''} 
							<span className='bg-[#FDF0D8] py-2 px-4'>
							 people-friendly as they are, <i>robust</i> and <i>scalable</i>
							</span>.
						</p>
					</div>
				</div>
      </section>
    );
  }
}

export default Milestones;