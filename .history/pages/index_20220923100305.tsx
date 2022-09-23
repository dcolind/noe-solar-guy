import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Accounts from '../components/Accounts'
import AcountCard from '../components/AcountCard'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(30,30,40)] text-white z-0">

      <Header />

      <section >
      <Hero />
      </section>

      <About />
      <AcountCard />
      <ContactMe />

   
    </div>
  )
}

export default Home
