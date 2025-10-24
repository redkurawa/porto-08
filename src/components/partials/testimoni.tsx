import TestimonialCard from '../testimonial-card';

export const Testimoni = () => {
  return (
    <div className='inner-con'>
      <div className='text-primary-200 text-center text-lg'>TESTIMONIALS</div>
      <div className='text-display-2xl mb-12 text-center font-extrabold'>
        PEOPLE SAYS ABOUT ME
      </div>
      <div>
        <TestimonialCard
          name='Thom Haye'
          role='Project Manager'
          quote='Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!'
          platformLogoSrc='/icons/upwork.svg'
          platformLogoAlt='Upwork'
        />
        <TestimonialCard
          name='Emily Carter'
          role='Head of Product'
          quote='"An absolute pleasure to work with! Delivered a stunning, high-
performance website that exceeded expectations. Attention to
detail and problem-solving skills are top-notch!"'
          platformLogoSrc='/icons/trello.svg'
          platformLogoAlt='Trello'
        />
        <TestimonialCard
          name='Sarah Lee'
          role='Engineering Manager'
          quote='"An exceptional frontend developer with a deep understanding of
IJI/UX principles. The ability to translate design into pixel-perfect
code is truly impressive. A valuable asset to any team!"'
          platformLogoSrc='/icons/zapier.svg'
          platformLogoAlt='Zapier'
        />
        <TestimonialCard
          name='Michael Brown'
          role='Lead Developer'
          quote='A pleasure to collaborate with! Writes clean, maintainable code
while effectively working with designers and backend engineers.
Outstanding work!'
          platformLogoSrc='/icons/zoom.svg'
          platformLogoAlt='Zoom'
        />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
