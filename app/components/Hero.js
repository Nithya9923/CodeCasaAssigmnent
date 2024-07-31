import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/birth.jpg')" }}>
      <div className="flex flex-col items-center justify-center h-full bg-red-800 bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Welcome to Our flower shop</h1>
        <p className="text-white text-lg mt-4">We offer the best services for your needs.</p>
        <a href="#features" className="mt-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">categories</a>
      </div>
    </div>
  );
};

export default Hero;
