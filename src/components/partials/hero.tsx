import React from 'react';

import { Button } from '@/components/ui/button';

import { Box2x3 } from '../layouts/box2x3';
import { Navbar } from '../layouts/navbar';

export const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className='inner-con mt-55'>
        <div className='flex items-center gap-2'>
          <span className='border-neutral-25 inline-block w-29 border-2 border-t'></span>
          <div className='text-xl'>Hi, I am Adi Frontend Developer</div>
        </div>
        <div className='my-4 text-[80px] leading-[80px] font-extrabold tracking-[0px]'>
          BUILDING FAST & <span className='text-primary-200'>INTERACTIVE </span>
          WEB EXPERIENCES.
        </div>
        <div className='text-xl-medium w-1/2 text-neutral-400'>
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </div>
        <Button className='mt-15 mb-41 px-29 py-6'>HIRE ME</Button>
      </div>
      <Box2x3 />
    </div>
  );
};
