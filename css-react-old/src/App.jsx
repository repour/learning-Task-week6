import './App.css'
import Category from './components/Category/Category'
import SoundEffects from './components/SoundEffects/SoundEffects'
import Testimonials from './components/Testimonials/Testimonials'
import TheFooter from './components/TheFooter/TheFooter'
import TheHead from './components/TheHead/TheHead'
import TrustedApp from './components/TrustedApp/TrustedApp'
import WhyUp from './components/WhyUp/WhyUp'

function App() {

  return (
    <>
    <TheHead />
    <TrustedApp />
    <SoundEffects />
    <Category />
    <WhyUp />
    <Testimonials />
    <TheFooter />
    </>
  )
}

export default App
