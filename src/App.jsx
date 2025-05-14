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
import CourseSchedule from './Pages/CourseSchedule'
import RoadMap from './Pages/RoadMap'
import WhoShouldJoinCarousel from './Pages/Carousel'
import CourseIntro from './Pages/Courseintro'
import AboutSection from './Pages/About'
import Certificate from './Pages/Certificate'
import FAQSection from './Pages/FAQSection'
import Footer from './Pages/footer'

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
      <CourseSchedule />
      <RoadMap />
      <WhoShouldJoinCarousel />
      <CourseIntro />
      <AboutSection />
      <Certificate />
      <FAQSection clasName="container"/>
      <Footer />
    </>
  )
}

export default App
