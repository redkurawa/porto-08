// components/testimonial-card.tsx
'use client';

import Image from 'next/image';

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  platformLogoSrc: string;
  platformLogoAlt?: string;
};

export default function TestimonialCard({
  name,
  role,
  quote,
  platformLogoSrc,
  platformLogoAlt = 'platform logo',
}: TestimonialCardProps) {
  return (
    <figure className='space-y-4'>
      <header className='flex items-center justify-between gap-4'>
        <figcaption>
          <p className='text-xl leading-none font-bold'>{name}</p>
          <p className='text-lg font-medium text-neutral-400'>{role}</p>
        </figcaption>

        <Image
          src={platformLogoSrc}
          alt={platformLogoAlt}
          width={114}
          height={48}
          priority
        />
      </header>

      <blockquote className='text-neutral-25 text-lg font-medium'>
        {quote}
      </blockquote>
    </figure>
  );
}
