import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Calendar, Clock, Play, Image as ImageIcon } from 'lucide-react';
import { Badge } from './ui/badge';

export function UpcomingProjects() {
  const projects = [
    {
      id: 1,
      title: 'Eternal Flames',
      type: 'Feature Film',
      genre: 'Romance Drama',
      releaseDate: 'March 2025',
      status: 'Post-Production',
      description: 'A sweeping romantic epic set against the backdrop of India\'s independence struggle. Follow two star-crossed lovers as they navigate love, duty, and sacrifice.',
      image: 'https://images.unsplash.com/photo-1623375428145-4d276c83ce5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc2MTYyNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      director: 'Rajesh Kumar',
      duration: '165 mins',
      hasVideo: true,
    },
    {
      id: 2,
      title: 'Mumbai Noir',
      type: 'Web Series',
      genre: 'Crime Thriller',
      releaseDate: 'April 2025',
      status: 'Filming',
      description: 'A gritty crime series exploring the dark underbelly of Mumbai. Eight episodes of intense drama, complex characters, and shocking revelations.',
      image: 'https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjE1NTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      director: 'Priya Sharma',
      duration: '8 Episodes',
      hasVideo: false,
    },
    {
      id: 3,
      title: 'Songs of the Valley',
      type: 'Music Video Series',
      genre: 'Musical',
      releaseDate: 'May 2025',
      status: 'Pre-Production',
      description: 'A collection of five original songs celebrating the cultural richness of Kashmir. Stunning visuals paired with soul-stirring melodies.',
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjYW1lcmElMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2MTUzOTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      director: 'Multiple Directors',
      duration: '5 Songs',
      hasVideo: true,
    },
    {
      id: 4,
      title: 'The Last Programmer',
      type: 'Short Film',
      genre: 'Sci-Fi',
      releaseDate: 'June 2025',
      status: 'Post-Production',
      description: 'In a world run by AI, one programmer discovers a way to rewrite reality itself. A thought-provoking short about technology and humanity.',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      director: 'Amit Verma',
      duration: '22 mins',
      hasVideo: true,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">Upcoming Projects</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Get a sneak peek at our exciting lineup of films, series, and special projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative h-96 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white hover:bg-red-700">
                      {project.status}
                    </Badge>
                  </div>

                  {/* Media Icons */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <ImageIcon size={20} className="text-gray-700" />
                    </div>
                    {project.hasVideo && (
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors shadow-md">
                        <Play size={20} className="text-white ml-0.5" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-gray-300 text-gray-700">
                      {project.type}
                    </Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">
                      {project.genre}
                    </Badge>
                  </div>

                  <h2 className="text-4xl mb-4 text-gray-900">{project.title}</h2>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.releaseDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Directed by <span className="text-red-600">{project.director}</span></span>
                    <button className="px-6 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors rounded">
                      Learn More
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
