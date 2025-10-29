import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Play, Star, Calendar } from 'lucide-react';

export function Home() {
  const featuredMovies = [
    {
      id: 1,
      title: 'The Last Horizon',
      year: 2024,
      genre: 'Sci-Fi Drama',
      rating: 8.5,
      description: 'A gripping tale of humanity\'s final frontier and the choices that define us.',
      image: 'https://images.unsplash.com/photo-1623375428145-4d276c83ce5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc2MTYyNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Shadows of Tomorrow',
      year: 2024,
      genre: 'Thriller',
      rating: 8.2,
      description: 'In a world where time is currency, one man fights to reclaim his future.',
      image: 'https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjE1NTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Echoes of Silence',
      year: 2023,
      genre: 'Drama',
      rating: 9.1,
      description: 'A powerful story of resilience, hope, and the unbreakable human spirit.',
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjYW1lcmElMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2MTUzOTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Big Poster */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://i.pinimg.com/1200x/de/80/1e/de801e0610771fe61df30604f94c9dc8.jpg"
            alt="Featured Production"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600 text-white text-xs tracking-wider">NOW SHOWING</span>
              <span className="text-white/90">2025</span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 text-white">SAIYAARA</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              A groundbreaking cinematic experience that redefines the boundaries of storytelling. 
              Journey with us through the depths of human emotion and the vastness of imagination.
            </p>
            <button className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-2 group">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Watch Trailer
            </button>
          </div>
        </div>
      </section>

      {/* About Production Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Crafting Stories That Matter</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Filmhouse Productions is a premier film production company dedicated to creating 
                  compelling narratives that resonate with audiences worldwide. With over a decade 
                  of experience in the industry, we've produced award-winning films, series, and 
                  digital content.
                </p>
                <p>
                  Our team of visionary directors, talented writers, and skilled technicians work 
                  together to bring extraordinary stories to life. From concept to screen, we ensure 
                  every frame reflects our commitment to excellence.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl text-red-600 mb-2">50+</div>
                  <div className="text-gray-500">Productions</div>
                </div>
                <div>
                  <div className="text-4xl text-red-600 mb-2">25+</div>
                  <div className="text-gray-500">Awards</div>
                </div>
                <div>
                  <div className="text-4xl text-red-600 mb-2">10+</div>
                  <div className="text-gray-500">Years</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Production"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl mb-3 text-gray-900">Our Latest Productions</h2>
              <p className="text-gray-500">Experience the magic of cinema</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <Card key={movie.id} className="bg-white border-gray-200 overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded shadow-md">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900">{movie.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar size={14} />
                    {movie.year} • {movie.genre}
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{movie.title}</h3>
                  <p className="text-gray-600 mb-4">{movie.description}</p>
                  <button className="text-red-600 hover:text-red-500 transition-colors flex items-center gap-2">
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
