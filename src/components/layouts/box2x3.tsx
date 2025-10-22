import React from 'react';

export const Box2x3 = () => {
  return (
    <div className='grid w-33 grid-cols-3 gap-[1px] bg-black'>
      <div className='bg-primary-400 col-start-2 row-start-1 size-11'></div>
      <div className='bg-primary-400 col-start-1 row-start-2 size-11'></div>
      <div className='bg-primary-400 col-start-3 row-start-2 size-11'></div>
    </div>
  );
};
