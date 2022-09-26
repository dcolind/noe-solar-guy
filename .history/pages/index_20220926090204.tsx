import type { NextPage } from 'next'

import About from '../components/About'

import AcountCard from '../components/AcountCard'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(30,30,40)] text-white z-0">

      <Header />

      <section className='snap-start'>
      <Hero />
      </section>

      <section id="about" className='snap-center'>
      <About />
      </section>
      
      <section id="projects" className='snap-center'>
      <AcountCard />
      </section>

      <section id="content" className='snap-center'>
      <ContactMe />
      </section>

   
    </div>
  )
}

export default Home
