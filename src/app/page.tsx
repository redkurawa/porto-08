import { Hero } from './partials/hero';
import { Services } from './partials/services';
import { Skill } from './partials/skill';

export default function Home() {
  return (
    <div className='mx-auto w-full max-w-370'>
      <Hero />
      <Services />
      <Skill />
    </div>
  );
}
