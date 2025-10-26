import Image from 'next/image';
import React from 'react';

import AnimatedHeading from '../ui/animated-heading';

export const Skill = () => {
  return (
    <div className='inner-con flex'>
      <div>
        <div className='text-primary-200 text-lg'>Skill</div>
        <AnimatedHeading className='text-display-2xl font-extrabold'>
          SKILLS THAT BRING IDEAS TO LIFE
        </AnimatedHeading>
        <div className='grid grid-cols-4'>
          <Image src='/icons/js.svg' alt='js' width={52} height={52} />
          <Image src='/icons/css.svg' alt='js' width={52} height={52} />
          <Image src='/icons/html.svg' alt='js' width={52} height={52} />
          <Image src='/icons/ejs.svg' alt='js' width={52} height={52} />
          <Image src='/icons/mongo.svg' alt='js' width={52} height={52} />
          <Image src='/icons/react.svg' alt='js' width={52} height={52} />
          <Image src='/icons/ts.svg' alt='js' width={52} height={52} />
          <Image src='/icons/docker.svg' alt='js' width={52} height={52} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
