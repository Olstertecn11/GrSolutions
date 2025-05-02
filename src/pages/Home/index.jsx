import Quote from '@/pages/Home/Quote';
import Hero from '@/pages/Home/Hero';
import Services from '@/pages/Home/Services';
import Steps from '@/pages/Home/Steps';
import SectionDivider from '@/components/SectionDivider';


const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Quote />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Steps />
    </div>
  )
}

export default Home;
