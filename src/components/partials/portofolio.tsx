import Image from 'next/image';
import React from 'react';

import AnimatedHeading from '../ui/animated-heading';

export const Portofolio = () => {
  return (
    <div className='inner-con'>
      <div className='text-primary-200 text-center text-lg'>PORTFOLIO</div>
      <AnimatedHeading className='text-display-2xl mb-12 text-center font-extrabold'>
        SELECTED WORK
      </AnimatedHeading>
      <div className='grid grid-cols-3 gap-x-5'>
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <Image
              src={`/images/porto${i + 1}.png`}
              alt='porto'
              width={381}
              height={284}
            />
            <div className='text-display-xs text-neutral-25 mt-4 font-bold'>
              Dashboard SaaS Task Management
            </div>
            <div className='text-md mb-12 text-neutral-400'>
              Lorem ipsum dolor sit amet consectetur. Aenean sed commcdo aenean
              nunc Lobortis.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
