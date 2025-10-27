import React from 'react';

import AnimatedHeading from '../ui/animated-heading';

export const FAQ = () => {
  return (
    <div className='inner-con'>
      <div className='text-primary-200 text-center text-lg'>FAQ</div>
      <AnimatedHeading className='text-display-md sm:text-display-2xl mb-12 font-extrabold'>
        FREQUENTLY ASKED QUESTIONS
      </AnimatedHeading>
      <div className='grid grid-cols-1 gap-20 sm:grid-cols-2'>
        <div>
          <div className='sm:text-display-xs text-lg font-bold'>
            What technologies do you specialize in?
          </div>
          <div className='text-md font-medium text-neutral-400'>
            I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and
            TypeScript, ensuring high-performance, scalable, and maintainable
            web applications.
          </div>
        </div>
        <div>
          <div className='sm:text-display-xs text-lg font-bold'>
            Do you work on both design and development?
          </div>
          <div className='text-md font-medium text-neutral-400'>
            I focus primarily on frontend development, translating UI/UX designs
            into responsive and interactive web experiences. However, I
            collaborate closely with designers to ensure a seamless user
            experience.
          </div>
        </div>
        <div>
          <div className='sm:text-display-xs text-lg font-bold'>
            Can you optimize an existing website for better performance?
          </div>
          <div className='text-md font-medium text-neutral-400'>
            Yes! I can analyze, debug, and optimize websites to improve speed,
            accessibility, and SEO, using best practices like lazy loading, code
            splitting, and performance monitoring.
          </div>
        </div>
        <div>
          <div className='sm:text-display-xs text-lg font-bold'>
            Do you take freelance or contract-based projects?
          </div>
          <div className='text-md font-medium text-neutral-400'>
            Yes! I am open to freelance, contract, and full-time opportunities,
            depending on the project scope and requirements. Feel free to reach
            out!
          </div>
        </div>
        <div>
          <div className='sm:text-display-xs text-lg font-bold'>
            How do you approach a new project?
          </div>
          <div className='text-md font-medium text-neutral-400'>
            I start by understanding the project goals and requirements,
            followed by wireframing or UI implementation, then development,
            testing, and deployment—ensuring a smooth and efficient workflow.
          </div>
        </div>
        <div>
          <div className='sm:text-display-xs text-lg font-bold'>
            How can we collaborate?
          </div>
          <div className='text-md font-medium text-neutral-400'>
            You can contact me via email, LinkedIn, or GitHub. I usually begin
            with a consultation to discuss your needs, then propose a plan to
            bring your vision to life. Let’s create something awesome together!
          </div>
        </div>
      </div>
    </div>
  );
};
