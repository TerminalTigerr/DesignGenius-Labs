import React, { Component } from 'react';
import { services } from '../helpers/static-texts';

class Services extends Component {
	
  render() {
    return (
			<section id="services" 
				className='bg-white relative'>
        <div className='flex flex-col justify-center items-start px-6 py-20 sm:py-32 sm:px-16'>
					<div className='flex flex-col justify-center items-start space-y-5 mb-[100px]' >
						<p className=' text-sm uppercase text-gray-800 font-poppins font-medium tracking-[7px]'>
							Services
						</p>
						<h1 className='text-gray-800 font-poppins font-medium sm:text-5xl 
							sm:leading-snug text-4xl leading-tight'>
							It's not about limitations, 
							<br className='sm:block hidden'/> but this is something 
							about <br className='sm:block hidden'/> what we focus on.
						</h1>
					</div>

					<div className='flex flex-col sm:flex-row justify-center items-center'>
						<div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 md:space-y-0 space-y-8'>
							{services.map((service) => (
								<div key={service.id} 
									className={`flex flex-col items-start justify-center space-y-4 p-[32px] md:w-1/3 h-[600px] rounded-3xl
									${service.id === 1 ? 'bg-serviceBlue': service.id === 2 ? 'bg-serviceYellow':'bg-servicePink'}`}>
									<img src={service.img} alt='brand' key={service.id} className='text-black w-14 h-14'/>
									<h2 key={service.id} className='text-black text-[32px] font-medium font-poppins'>
										{service.title}
									</h2>
									<p key={service.id} className='text-gray-600 text-base font-poppins'>
										{service.description}
									</p>
									<ul key={service.id} className='list-inside list-disc text-black font-poppins text-base space-y-2 font-medium'>
										{service.servicesList.map( (item) => (
											<li key={service.id}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
      </section>
    );
  }
}

export default Services;