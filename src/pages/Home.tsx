import { About, Hero, OurProduct, Overview } from '@/components/landing';

export const Home: React.FC = () => {
  return (
    <main className="pb-24">
      <Hero />

      <About />

      <Overview />

      <OurProduct />
    </main>
  );
};
