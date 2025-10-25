import { FAQ } from '@/components/partials/faq';
import { Portofolio } from '@/components/partials/portofolio';
import { Testimoni } from '@/components/partials/testimoni';
import { Working } from '@/components/partials/working';

import { Contact } from '../components/partials/contact';
import { Hero } from '../components/partials/hero';
import { Services } from '../components/partials/services';
import { Skill } from '../components/partials/skill';

export default function Home() {
  return (
    <div className='mx-auto w-full max-w-370'>
      <Hero />
      <Services />
      <Skill />
      <Portofolio />
      <Working />
      <Testimoni />
      <FAQ />
      <Contact />
    </div>
  );
}
