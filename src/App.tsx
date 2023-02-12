import { useState } from 'react'
import './styles/sass/config/_index.scss'

import Nav from './components/Nav'
import Header from './components/Header'
import PoweredBy from './components/PoweredBy'
import Feature from './components/Feature'
import Footer from './components/Footer'
import ForWho from './components/ForWho'
import AboutUs from './components/AboutUs'
import FAQ from './components/FAQ'

const App: React.FC<{}> = () => {
  return (
    <>
      <div className='container'>
        <Nav />
        <main>
          <Header />
          <PoweredBy />
          <Feature />
          <ForWho />
          <FAQ />
          <AboutUs />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
