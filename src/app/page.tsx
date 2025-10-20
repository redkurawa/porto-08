import { Hero } from './partials/hero';
import { Services } from './partials/services';

export default function Home() {
  return (
    <div className='mx-auto w-full max-w-370'>
      <Hero />
      <Services />
    </div>
  );
}
