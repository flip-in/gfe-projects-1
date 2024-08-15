import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';

function App() {
  return (
    <div className='h-screen w-full flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px]'>
      <TestimonialCard />
      <Footer />
    </div>
  );
}

export default App;
