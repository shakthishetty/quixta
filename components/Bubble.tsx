// Bubble.jsx
import Image from 'next/image';
import ScienceCard from './ScienceCard';

const Bubble = () => {
  return (
    <>
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden
                border-t-[0.5px] border-b-[0.5px] border-transparent border-opacity-20">
  {/* Background Image */}
  <Image
    src="/bubble.png"
    alt="Bubbles background"
    fill
    className="object-cover object-center opacity-80"
    priority
  />

  {/* Overlay Text */}
  <div className="relative text-center px-4 sm:px-8">
    <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium leading-snug max-w-2xl mx-auto">
      Revolutionizing luminescence to power the next generation of technology
    </h1>
  </div>
</div>
     <ScienceCard />
    </>

  );
};

export default Bubble;
