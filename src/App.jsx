
import './App.css'
import Banner from './components/banner/Banner'
import Client from './components/client/Client'
import Experience from './components/experience/Experience'

import Header from './components/header/Header'
import Price from './components/price/Price'
import Recent from './components/recent/Recent'
import Skills from './components/skills/Skills'
import Talk from './components/talk/Talk'

function App() {


  return (
    <>
   <Header/>
   <Banner/>
  <Experience/>

  <Recent/>
  <Price/>
  <Skills/>
  <Client/>
  <Talk/>
    </>
  )
}

export default App
