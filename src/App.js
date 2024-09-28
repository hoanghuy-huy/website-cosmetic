import React from 'react'
import Nav from './components/Nav'
import './globalStyle.scss'
import Header from './components/Header'
import AboutPage from './components/About'
const App = () => {
  return (
    <div className='App'>
        <Nav/>
        <Header />
        <AboutPage />
    </div>
  )
}

export default App