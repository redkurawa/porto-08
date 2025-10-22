'use client';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

import logToServer from '@/lib/logger';

// const logToServer = async (type: string, payload: any) => {
//   try {
//     await fetch('/api/log', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ type, payload }),
//     });
//   } catch (err) {
//     console.error('❌ Gagal kirim log ke server:', err);
//   }
// };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.error('❌ Email tidak valid:', email);
    logToServer('❌ Invalid Email', { email }); // ✅ log error
    return;
  }

  const res = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });
  console.log('📤 Sending:', { name, email, message });
  const result = await res.json();
  console.log('Response:', result); // 🔍 Audit log
  logToServer('🔍 Response', result); // ✅ log response
};

export const Contact = () => {
  return (
    <div className='mt-20'>
      <div className='inner-con flex gap-30.5'>
        <div className="flex w-[420px] flex-col justify-end bg-[url('/images/contact-face.png')]">
          {/* <Image
            src='/images/contact-face.png'
            alt='face'
            width={420}
            height={557}
          /> */}
          <div className='flex justify-center gap-x-6'>
            <Image src='/icons/db.svg' alt='db' width={64} height={64} />
            <Image src='/icons/ig.svg' alt='ig' width={64} height={64} />
            <Image
              src='/icons/linkedin.svg'
              alt='link'
              width={64}
              height={64}
            />
          </div>
          <div className='text-center text-xl font-bold'>- adi -</div>
          <div className='text-md text-center font-semibold text-neutral-400'>
            Aviable for work
          </div>
        </div>
        <div>
          <div className='text-primary-200 text-lg'>Skill</div>
          <div className='text-display-2xl mb-12 font-extrabold'>
            LET S GET IN TOUCH
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <label id='name'>Name</label>
            <input id='name' name='name' className='mb-6' />

            <label id='email'>Email</label>
            <input id='email' type='email' name='email' className='mb-6' />
            <label id='message'>Message</label>
            <textarea id='message' name='message' rows={5}></textarea>
            <Button className='mt-6 h-14 w-full' type='submit'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
