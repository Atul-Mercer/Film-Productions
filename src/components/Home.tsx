import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Play, Star, Calendar } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import first from '../assets/poster/FIRST.png'
import second from '../assets/poster/SECOND.jpeg'
import third from '../assets/poster/THIRD.png'
import fourth from '../assets/poster/FOURTH.jpeg'

import DRIP from '../assets/youtube/drip.png'
import KAREGA from '../assets/youtube/karega.png'
import UNKNOWN from '../assets/youtube/unkonwn.png'
export function Home() {
  const featuredMovies = [
    {
      id: 1,
      title: 'Drip Drip ',
      year: 2024,
      genre: 'Youtube Video',
      rating: 8.5,
      description: 'Lost in the rain, chasing shadows through the pain, Every drop whispers the truth I can’t contain.',
      image: DRIP,
      link: 'https://www.youtube.com/watch?v=iT6eefjJD1U'
    },
    {
      id: 2,
      title: 'Chalo Chalein ',
      year: 2024,
      genre: 'Youtube Video',
      rating: 8.2,
      description: 'Tighten your belt, open your eyes — let the river of change flow, Let’s walk together to rewrite history and bring back the golden glory.',
      image: UNKNOWN,
      link: 'https://www.youtube.com/watch?v=UIkfe753yzY'
    },
    {
      id: 3,
      title: 'ए करेजा ',
      year: 2023,
      genre: 'Youtube Video',
      rating: 9.1,
      description: 'The heart didn’t break — it just fell silent. There was no love, yet the memories overflowed.',
      image: KAREGA,
      link: 'https://www.youtube.com/watch?v=RiO3Q2Fw4GI'
    },
  ];

  // Define an array of featured items for the hero slider (5 slides with different images and content)
  const featuredItems = [
    {
      image: first,
      status: 'NOW SHOWING',
      year: 2025,
      title: 'Another Shade Of Yellow',
      description: 'A woman living alone becomes entangled in her own memories-until the past she refuses to let go of starts to becomes her present.',
    },
    {
      image: second,
      status: 'COMING SOON',
      year: 2026,
      title: 'Shubh Deepawali ',
      description: 'An emotional journey that explores how ego can destroy relationships and how the power of compassion and unity can heal what pride once broke.',
    },
    {
      image: third,
      status: 'NOW SHOWING',
      year: 2024,
      title: 'Mosquito',
      description: 'Set against the backdrop of modern relationships, the story exposes how one-sided love fueled by ego and jealousy can disrupt lives and challenge the values of respect and empathy, how a man’s obsession spirals into chaos-revealing how pride and insecurity can destroy more than just hearts.',
    },
    {
      image: fourth,
      status: 'UPCOMING',
      year: 2025,
      title: 'Mehraru ',
      description: 'In todays times, extramarital affairs have become very common, and this comedy short film humorously tackles this very issue.',
    },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Big Poster */}
      <section className="relative h-[90vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-slide every 5 seconds
          pagination={{ clickable: true, dynamicBullets: true }} // Beautiful pagination bullets
          effect="fade" // Beautiful fade effect for transitions
          fadeEffect={{ crossFade: true }} // Smooth cross-fade
          loop={true} // Infinite loop for continuous sliding
          speed={1000} // Smooth transition speed
          className="h-full w-full"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out scale-100 hover:scale-105" // Added subtle zoom effect on hover for beauty
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /> {/* Overlay gradient for better text readability and beautiful effect */}
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
                <div className="max-w-3xl animate-fade-in"> {/* Added fade-in animation for content (define in CSS if needed) */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs tracking-wider rounded-full shadow-md">{item.status}</span> {/* Rounded for beauty */}
                    {/* <span className="text-white/90">{item.year}</span> */}
                  </div>
                  <h1 className="text-6xl md:text-7xl mb-6 text-white font-bold tracking-tight drop-shadow-lg">{item.title}</h1> {/* Added shadow for better visibility */}
                  <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">{item.description}</p>
                  <button className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-2 group rounded-lg shadow-lg hover:shadow-xl"> {/* Rounded and shadow for beauty */}
                    <Play size={20} className="group-hover:scale-110 transition-transform" />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Production Section */}
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}

      {/* Featured Movies Section */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl mb-3 text-gray-900 font-bold">Our Latest Productions</h2>
            <p className="text-gray-500">Experience the magic of cinema</p>
          </div>
        </div>

        {/* Movie Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredMovies.map((movie) => (
            <a
              key={movie.id}
              href={movie.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
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
                    {movie.genre}
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900 font-semibold">{movie.title}</h3>
                  <p className="text-gray-600 mb-4">{movie.description}</p>
                  <span className="text-red-600 hover:text-red-500 transition-colors flex items-center gap-2">
                    Watch Now →
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}