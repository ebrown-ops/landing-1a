import Image from 'next/image';

const logos = [
  { name: 'TechCrunch', src: '/api/placeholder/150/50' },
  { name: 'Forbes', src: '/api/placeholder/150/50' },
  { name: 'Wall Street Journal', src: '/api/placeholder/150/50' },
  { name: 'Bloomberg', src: '/api/placeholder/150/50' },
];

export default function FeaturedIn() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">Featured In</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image src={logo.src} alt={logo.name} width={150} height={50} className="grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}