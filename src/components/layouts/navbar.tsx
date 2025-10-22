import Link from 'next/link';

import { NavbarMenu } from '@/types/navbar';

export const Navbar = () => {
  return (
    <div className='inner-con flex justify-between py-10'>
      <div className='flex items-center gap-2'>
        <span className='border-neutral-25 inline-block w-10 border-2 border-t'></span>
        <div className='text-xl-bold text-primary-200'>Adi</div>
        {/* <Minus /> */}
      </div>
      <div className='flex w-1/2 justify-between'>
        {NavbarMenu.map((m, i) => (
          <div key={i} className='text-md'>
            <Link href={m.url}>{m.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
