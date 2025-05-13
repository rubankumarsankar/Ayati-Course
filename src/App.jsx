import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home'
import Eg1 from './Pages/eg1'
import GetTrainedSection from './Pages/GetTrainedSection'
import CertificateSection from './Pages/CertificateSection'
import Keypoint from './Pages/keypoint'
import NewsBanner from './Pages/newsbanner'
import CurriculumSection from './Pages/CurriculumSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home /> 
        
      <GetTrainedSection/>
      <Keypoint />
      <CertificateSection />
      <NewsBanner />
      <CurriculumSection />
        
    </>
  )
}

export default App
