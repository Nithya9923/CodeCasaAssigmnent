import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Category</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="rounded overflow-hidden shadow-lg">
                  <img className="w-full" src="/images/rose.jpeg" alt="wedd" style={{height: "280px"}} />
                <h3 className="font-bold text-xl mb-2">Romantic Bouquets</h3>
                <p className="text-gray-700 text-base">Perfect for expressing love and affection with a blend of roses.</p>
              
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src="/images/wedd.jpeg" alt="wedd" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Wedding Bouquets</h3>
                <p className="text-gray-700 text-base">Elegant and tailored for weddings, often including roses, peonies, and orchids.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
