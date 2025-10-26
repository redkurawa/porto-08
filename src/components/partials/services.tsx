import { Monitor } from 'lucide-react';
import React from 'react';

import AnimatedHeading from '../ui/animated-heading';

export const Services = () => {
  return (
    <div className='inner-con my-30'>
      <div className='text-primary-200 text-lg'>Services</div>
      <div className='flex'>
        <AnimatedHeading className='text-display-md my-4 font-extrabold tracking-[0px] sm:text-[80px] sm:leading-[80px]'>
          MY SERVICE EXPERTISE
        </AnimatedHeading>
        <div className='text-md mt-5 w-2/3 font-medium text-neutral-400 sm:text-xl'>
          Creating modern, intuitive, and visually consistent web experiences
          that align with industry trends and user expectations.
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-10'>
        <div className='py-6'>
          <div className='border-b border-neutral-800 pb-6 text-xl text-neutral-400'>
            01
          </div>
          <Monitor className='text-primary-200 mt-6 size-8' />
          <div className='sm:text-display-sm my-6 text-xl font-semibold'>
            Custom Website Development
          </div>
          <div className='text-xl text-neutral-400'>
            Building responsive, fast, and scalable websites tailored to your
            needs.
          </div>
        </div>
        <div className='py-6'>
          <div className='border-b border-neutral-800 pb-6 text-xl text-neutral-400'>
            02
          </div>
          <Monitor className='text-primary-200 mt-6 size-8' />
          <div className='text-display-sm my-6 font-semibold'>
            Web Performance Optimization
          </div>
          <div className='text-xl text-neutral-400'>
            Enhancing website speed, SEO, and overall performance for bette
          </div>
        </div>
        <div className='py-6'>
          <div className='border-b border-neutral-800 pb-6 text-xl text-neutral-400'>
            03
          </div>
          <Monitor className='text-primary-200 mt-6 size-8' />
          <div className='text-display-sm my-6 font-semibold'>
            Website Maintenance & Debugging
          </div>
          <div className='text-xl text-neutral-400'>
            Fixing bugs, improving UI, and ensuring smooth performance over
            time.
          </div>
        </div>
      </div>
    </div>
  );
};
