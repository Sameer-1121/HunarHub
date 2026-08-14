import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import PopularListings from '../components/home/PopularListings';
import StatsBanner from '../components/home/StatsBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <PopularListings />
      <StatsBanner />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}