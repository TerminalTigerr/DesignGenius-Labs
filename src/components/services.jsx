import React, { Component } from 'react';
import { services } from '../helpers/static-texts';

class Services extends Component {
  render() {
    return (
			<section id="services" 
				className='bg-white relative'>
        <div className='flex flex-col justify-center items-start px-6 py-16 sm:py-40 sm:px-16'>
					<div className='flex flex-col justify-center items-start space-y-5' >
						<p className=' text-sm uppercase text-gray-800 font-poppins font-medium tracking-[7px]'>
							Services
						</p>
						<h1 className='text-gray-800 font-poppins font-medium sm:text-5xl sm:leading-snug text-4xl leading-tight'>
							It's not about limitations, 
							<br className='sm:block hidden'/> but this is something 
							about <br className='sm:block hidden'/> what we focus on.
						</h1>
					</div>

					<div className='flex flex-col sm:flex-row justify-center items-center'>
						<div className='flex flex-col sm:flex-row justify-center items-start'>
							{services.map((service) => (
								<div key={service.id} 
									className={`flex flex-col items-start justify-center space-y-4 p-[32px] bg-[#${service.backgroundColor}]`}>
									<img src={service.img} alt='brand' key={service.id}/>
									<h2 key={service.id}>
										{service.title}
									</h2>
									<p key={service.id}>
										{service.description}
									</p>
									<ul key={service.id} className=' list-disc'>
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