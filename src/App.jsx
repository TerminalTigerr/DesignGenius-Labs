import React, { Component } from 'react';
import {Navbar, Hero, Milestones, Services, Work, Testimonials} from './components';

class App extends Component {
  render() {
    return (
      <div className='bg-primary overflow-hidden w-full scroll-smooth'>
        <div className='flex justify-center items-center sm:p-8 p-6'>
          <div className='w-full'>
            <Navbar />
          </div>
        </div>

        <div className=' justify-center items-center'>
          <div className='w-full'>
            <Hero />
            <Milestones />
            <Services />
            <Work />
            <Testimonials />
          </div>
        </div>
      </div>
    );
  }
}

export default App;