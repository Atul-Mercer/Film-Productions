import { ImageWithFallback } from './figma/ImageWithFallback';
import Sunil from '../assets/in-house-talents/Sunil-Tamang.jpg';
import Abhisek from '../assets/in-house-talents/Abhishek Srivastava.jpeg';
import AbhishekThakur from '../assets/in-house-talents/Abhishek Thakur.jpeg';
import AmitSinha from '../assets/in-house-talents/Amit Sinha.jpg';
import Arjun from '../assets/in-house-talents/Arjun Singh Shekhawat.jpg';
import PriyankaBeia from '../assets/in-house-talents/Priyanka Beia.jpg';
import ShashankPrajapati from '../assets/in-house-talents/Shashank Prajapati.JPG';
import ShilpiSinha from '../assets/in-house-talents/Shilpi Sinha.jpg';
import Durgraj from '../assets/in-house-talents/Durgraj.jpeg';
import Rajan from '../assets/in-house-talents/rajan.jpeg';

export function InHouseTalent() {
  const talent = [
    { id: 1, name: 'Sunil Tamang', image: Sunil },
    { id: 2, name: 'Abhishek Srivastava', image: Abhisek },
    { id: 3, name: 'Arjun Singh Shekhawat', image: Arjun },
    { id: 4, name: 'Abhishek Thakur', image: AbhishekThakur },
    { id: 5, name: 'Amit Sinha', image: AmitSinha },
    { id: 6, name: 'Priyanka Bajaj', image: PriyankaBeia },
    { id: 7, name: 'Shashank Prajapati', image: ShashankPrajapati },
    { id: 8, name: 'Shilpi Sinha', image: ShilpiSinha },
    { id: 9, name: 'Durgraj Alok Darshi', image: Durgraj },
    { id: 10, name: 'Rajan Kawatra', image: Rajan },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4 bg-"style={{ fontFamily: 'Roboto Condensed, sans-serif',marginTop: '10px'  }}>In-House Talents</h1>
          <i className="text-gray-400 text-lg"style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
            Meet our talented artists who bring creativity to life.
          </i>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {talent.map((person) => (
            <div key={person.id} className="flex flex-col items-center">
              {/* ---------- CARD (rounded, smaller fixed size: w-64) ---------- */}
              <div
                className="group rounded-xl overflow-hidden bg-gray-100 border border-gray-300 shadow-lg hover:shadow-red-600/20 transition-all w-64" // **Uniform Width (256px)**
              >
                <div className="relative h-80 bg-black"> {/* **Uniform Height (320px)** */}
                  {/* bg-black ensures no white gaps if image is transparent */}
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-contain rounded-none group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* ---------- NAME (below the image, centered) ---------- */}
              <h3 className="mt-4 text-xl font-semibold text-black group-hover:text-red-500 transition-colors"style={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                {person.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}