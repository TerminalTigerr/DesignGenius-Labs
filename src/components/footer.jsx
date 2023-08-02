import React, { Component } from 'react';
import { logo } from '../assets';
import { footerLinks } from '../helpers/static-texts';

class Footer extends Component {
  render() {
    return (
      <footer className='relative bg-white'>
        <div className='flex justify-center items-start flex-col sm-flex-row px-6 sm:px-16 py-16'>
          <img src={logo} className='cursor-pointer'/>
          <div className='flex flex-col sm:flex-row justify-center items-start mt-8 space-x-0 
            sm:space-x-4 md:space-x-8 space-y-20 sm:space-y-0'>
            <div className='flex flex-col justify-center items-start space-y-5 max-w-[490px]'>
              <h3 className='text-black text-[25px] font-poppins'>
                Agency with incredible design and development 
                expertise. Based in Accra, Ghana.
              </h3>
              <p className='text-[17px] text-slate-600 font-poppins'>
                nuhumusah874@gmail.com
              </p>
              <span className='text-[17px] text-slate-600 font-poppins'>
                &#169; 2023 Genius Design Labs - All Rights Reserved
              </span>
            </div>
            <div className='grid sm:grid-cols-4 grid-cols-2 gap-24 sm:gap-4'>
              {footerLinks.map((ftLink) => (
                <div key={ftLink.id} className='flex flex-col space-y-5'>
                  <h4 className='text-gray-400 text-[13px] font-poppins uppercase tracking-[3px] font-medium'>
                    {ftLink.header}
                  </h4>
                  <ul className='space-y-5'>
                    {ftLink.links.map((link) => (
                      <li className='text-[14px] text-black font-poppins font-medium'>
                        <a className='cursor-pointer'>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;