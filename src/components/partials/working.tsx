import React from 'react';

import AnimatedHeading from '../ui/animated-heading';

export const Working = () => {
  return (
    <div className='inner-con'>
      <div className='text-primary-200 text-center text-lg'>WORKING</div>
      <AnimatedHeading className='text-display-md my-4 font-extrabold tracking-[0px] sm:text-[80px] sm:leading-[80px]'>
        WHY CHOOSE ME?
      </AnimatedHeading>

      <div className='grid grid-cols-2 gap-8'>
        <div className='space-y-4'>
          <ul className='space-y-2 text-xl font-bold'>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> React Expert
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Precise Website
              Implementation
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> TypeScript
              Proficiency
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Clean,
              Maintainable Code
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Responsive Website
              Development
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> UI Design
              Proficiency (Figma)
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <ul className='space-y-2 text-xl text-neutral-400'>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Basic React
              Knowledge
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Inconsistent
              Design Translation
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Little to No
              TypeScript Knowledge
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Unstructured Code
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> Inconsistent
              Responsiveness
            </li>
            <li className='flex items-center'>
              <span className='text-lime-green mr-2'>★</span> No Design Skills
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
