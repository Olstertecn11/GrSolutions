import Quote from '@/pages/Home/Quote';
import Hero from '@/pages/Home/Hero';
import Services from '@/pages/Home/Services';
import Steps from '@/pages/Home/Steps';
import SectionDivider from '@/components/SectionDivider';
import SectionDividerTwo from '@/components/SectionDividerTwo';
import Contact from '@/pages/Home/Contact';
import ContactForm from '@/pages/Home/ContactForm';



const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Quote />
      <Services />
      <SectionDivider />
      <Steps />
      <SectionDivider />
      <Contact />
      <ContactForm />
    </div>
  )
}

export default Home;
