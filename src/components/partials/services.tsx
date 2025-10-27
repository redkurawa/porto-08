import { Monitor } from 'lucide-react';
import React from 'react';

import AnimatedHeading from '../ui/animated-heading';

export const Services = () => {
  return (
    <div className='inner-con my-30'>
      <div className='text-primary-200 text-lg'>Services</div>
      <div className='block sm:flex'>
        <AnimatedHeading className='text-display-md sm:text-display-2xl mb-12 font-extrabold'>
          MY SERVICE EXPERTISE
        </AnimatedHeading>
        <div className='text-md mt-5 font-medium text-neutral-400 sm:w-2/3 sm:text-xl'>
          Creating modern, intuitive, and visually consistent web experiences
          that align with industry trends and user expectations.
        </div>
      </div>
      <div className='grid grid-cols-1 gap-x-10 sm:grid-cols-3'>
        <div className='py-6'>
          <div className='text-md border-b border-neutral-800 pb-6 text-neutral-400 sm:text-xl'>
            01
          </div>
          <Monitor className='text-primary-200 mt-6 size-8' />
          <div className='sm:text-display-sm my-6 text-xl font-semibold'>
            Custom Website Development
          </div>
          <div className='text-md text-neutral-400 sm:text-xl'>
            Building responsive, fast, and scalable websites tailored to your
            needs.
          </div>
        </div>
        <div className='py-6'>
          <div className='text-md border-b border-neutral-800 pb-6 text-neutral-400 sm:text-xl'>
            02
          </div>
          <Monitor className='text-primary-200 mt-6 size-8' />
          <div className='sm:text-display-sm my-6 text-xl font-semibold'>
            Web Performance Optimization
          </div>
          <div className='text-md text-neutral-400 sm:text-xl'>
            Enhancing website speed, SEO, and overall performance for bette
          </div>
        </div>
        <div className='py-6'>
          <div className='text-md border-b border-neutral-800 pb-6 text-neutral-400 sm:text-xl'>
            03
          </div>
          <Monitor className='text-primary-200 mt-6 size-8' />
          <div className='sm:text-display-sm my-6 text-xl font-semibold'>
            Website Maintenance & Debugging
          </div>
          <div className='text-md text-neutral-400 sm:text-xl'>
            Fixing bugs, improving UI, and ensuring smooth performance over
            time.
          </div>
        </div>
      </div>
    </div>
  );
};
