import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import './App.css';

// Page Components
import Home from './Pages/home';
import Eg1 from './Pages/eg1'; // Not used yet
import GetTrainedSection from './Pages/GetTrainedSection';
import CertificateSection from './Pages/CertificateSection';
import Keypoint from './Pages/keypoint';
import NewsBanner from './Pages/newsbanner';
import CurriculumSection from './Pages/CurriculumSection';
import CourseSchedule from './Pages/CourseSchedule';
import RoadMap from './Pages/RoadMap';
import WhoShouldJoinCarousel from './Pages/Carousel';
import CourseIntro from './Pages/Courseintro';
import AboutSection from './Pages/About';
import Certificate from './Pages/Certificate';
import FAQSection from './Pages/FAQSection';
import Footer from './Pages/Footer';
import ScrollToTopButton from './Pages/ScrollToTopButton';
import ScrollProgress from './Pages/ScrollProgress';
import Loader from './Pages/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate a short delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
      <GetTrainedSection />
      <Keypoint />
      <CertificateSection />
      <NewsBanner />
      <CurriculumSection className="bg-white "/>
      <CourseSchedule />
      <RoadMap />
      <WhoShouldJoinCarousel />
      <CourseIntro />
      <AboutSection />
      <Certificate />
      <FAQSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
