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

export function InHouseTalent() {
  const talent = [
    { id: 1, name: 'Sunil Tamang', image: Sunil },
    { id: 2, name: 'Abhishek Srivastava', image: Abhisek },
    { id: 3, name: 'Arjun Singh Shekhawat', image: Arjun },
    { id: 4, name: 'Meera Reddy', image: AbhishekThakur },
    { id: 5, name: 'Vikram Singh', image: AmitSinha },
    { id: 6, name: 'Anjali Sharma', image: PriyankaBeia },
    { id: 7, name: 'Kabir Khan', image: ShashankPrajapati },
    { id: 8, name: 'Divya Nair', image: ShilpiSinha },
    { id: 9, name: 'Durgraj Alok Darshi', image: Durgraj },
  ];

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">In-House Talents</h1>
          <p className="text-gray-400 text-lg">
            Meet our talented artists who bring creativity to life.
          </p>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {talent.map((person) => (
            <div
              key={person.id}
              className="group rounded-xl overflow-hidden bg-gray-100 border border-gray-300 shadow-lg hover:shadow-red-600/20 transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-black group-hover:text-red-500 transition-colors">
                  {person.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
