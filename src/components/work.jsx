import React, { Component } from 'react';
import { works } from '../helpers/static-texts';
import { laptop, phone, diabeticBuyBack } from '../assets';

class Work extends Component {
  render() {
    return (
      <section id='work' className='relative bg-white'>
				<div className='flex flex-col justify-center items-start px-6 py-[200px] sm:py-40 sm:px-16'>
					<div className='flex flex-col justify-center items-start space-y-5 mb-[100px]'>
						<p className=' text-sm uppercase text-gray-800 font-poppins font-medium tracking-[7px]'>
							Work
						</p>
						<h2 className='text-gray-800 font-poppins font-medium sm:text-5xl 
							sm:leading-snug text-4xl leading-tight'>
							We knew to be done is<br /> good, but sharing our<br /> 
							experiences and it “works”<br /> is way better.
						</h2>
					</div>
					<div className='flex flex-col justify-center items-start space-y-16'>
						<p className='font-poppins font-normal ss:text-2xl text-xl sm:text-3xl sm:leading-relaxed'>
							Our expert team of designers, developers, illustrators and project managers
							work with streamlined processes to {' '}
							<span className='bg-[#FDF0D8] px-[1px] py-[2px]'>break through organizational roadblocks.</span> 
							We translate research into solutions, crafting thoughtful and unified brands, 
							apps, websites, interfaces and systems.
						</p>
						<p className='font-poppins font-normal ss:text-2xl text-xl sm:text-3xl sm:leading-relaxed'>
							Through challenging core assumptions, we shape the products and services 
							that {' '}
							<span className='bg-[#FDF0D8] px-[1px] py-[2px]'>
							improve the lives of thousands every single day.</span>
						</p>
					</div>
					<div className='flex flex-col md:flex-row justify-between items-start 
						md:mt-[200px] mt-[150px] md:space-x-10 md:space-y-0 space-y-16 space-x-0'>
					{works.map((work) => (
						<div key={work.id} className='flex flex-col justify-center items-start md:w-1/2 space-y-8'>
							<p className='text-sm text-black font-poppins tracking-[7px] font-medium'>
								{work.year}
							</p>
							<h1 className='text-[32px] text-black font-normal font-poppins'>
								{work.title}
							</h1>
							<p className='text-base text-black font-poppins object-contain'>
								{work.content}
							</p>
							<div className='flex flex-col md:flex-row justify-between items-start md:space-x-16 space-x-0 space-y-5 md:space-y-0'>
								<div className='flex-col space-y-5 justify- items-start inline-block'>
									<p className='text-gray-400 text-[14px] font-poppins uppercase tracking-[7px] font-medium'>
										From
									</p>
									<p className='text-[24px] text-black font-poppins font-normal'>
										{work.from}
									</p>
								</div>
								<div className='flex-col space-y-5 justify-start items-start inline-block'>
									<p className='text-gray-400 text-[14px] font-poppins uppercase tracking-[7px] font-medium'>
										Timeframe
									</p>
									<p className='text-[24px] text-black font-poppins font-normal'>
										{work.Timeframe}
									</p>
								</div>
								<div className=' flex-col space-y-5 justify-start items-start inline-block'>
									<p className='text-gray-400 text-[14px] font-poppins uppercase tracking-[7px] font-medium'>
										services
									</p>
									<p className='text-[24px] text-black font-poppins font-normal'>
										{work.services}
									</p>
								</div>
							</div>
							<div className='flex flex-col md:flex-row justify-start items-center'>
								<div className={`relative justify-center items-center py-20 md:h-[670px] rounded-3xl
									${work.id === 1 ? 'bg-[#E8F5FF]' : ' bg-slate-300'} overflow-hidden`}>
									<img src={work.media.item1} className={`-left-1 `}/>
									<img src={work.media.item2}  className='absolute -right-16 top-40 w-[300px] max-w-[450px]'/>
								</div>
							</div>
						</div>
					))}
				</div>
				</div>
      </section>
    );
  }
}

export default Work;