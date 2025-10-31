import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Calendar, Clock, Play, Image as ImageIcon } from 'lucide-react';
import { Badge } from './ui/badge';

import first from '../assets/poster/FIRST.png'
import second from '../assets/poster/SECOND.jpeg'
import third from '../assets/poster/THIRD.png'
import fourth from '../assets/poster/FOURTH.jpeg'

export function UpcomingProjects() {
  const projects = [
    {
      id: 1,
      title: 'Another Shade Of Yellow',
      type: 'Feature Film',
      genre: 'Suspense',
      releaseDate: 'March 2025',
      status: 'Post-Production',
      description: 'A woman living alone becomes entangled in her own memories-until the past she refuses to let go of starts to becomes her present.',
      image: first,
      director: 'Deep Mala Srivastava',
      duration: '165 mins',
      hasVideo: true,
    },
    {
      id: 2,
      title: 'Shubh Deepawali',
      type: 'Film',
      genre: ' Family Drama',
      releaseDate: 'April 2025',
      status: 'Filming',
      description: 'An emotional journey that explores how ego can destroy relationships and how the power of compassion and unity can heal what pride once broke.',
      image: second,
      director: 'Deep Mala Srivastava',
      duration: '8 Episodes',
      hasVideo: false,
    },
    {
      id: 3,
      title: 'Mosquito',
      type: 'Short Film',
      genre: ' Thriller',
      releaseDate: 'May 2025',
      status: 'Pre-Production',
      description: 'Set against the backdrop of modern relationships, the story exposes how one-sided love fueled by ego and jealousy can disrupt lives and destroy more than just hearts.',
      director: 'Deep Mala Srivastava',
      image: third,
      duration: '5 Songs',
      hasVideo: true,
    },
    {
      id: 4,
      title: 'Mehraru ',
      type: 'Short Film',
      genre: 'Comedy',
      releaseDate: 'June 2025',
      status: 'Post-Production',
      description: 'In todays times, extramarital affairs have become very common, and this comedy short film humorously tackles this very issue.',
      image: fourth,
      director: 'Deep Mala Srivastava',
      duration: '22 mins',
      hasVideo: true,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl mb-6 text-gray-900">Upcoming Projects</h1>
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
                    {/* <button className="px-6 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors rounded">
                      Learn More
                    </button> */}
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
