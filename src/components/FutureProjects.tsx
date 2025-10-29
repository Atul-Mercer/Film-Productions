import { Card, CardContent } from './ui/card';
import { Lightbulb, Film, Tv, Music, Clapperboard, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

export function FutureProjects() {
  const futureProjects = [
    {
      id: 1,
      title: 'Chronicles of the Empire',
      type: 'Epic Historical Series',
      icon: Tv,
      timeline: '2026-2027',
      description: 'A massive 3-season historical drama chronicling the rise and fall of one of India\'s greatest empires. This ambitious project will feature elaborate sets, thousands of extras, and unprecedented production scale.',
      highlights: [
        'Budget: ₹500 Crores',
        '36 Episodes across 3 seasons',
        'International co-production',
        'Shooting across 15 locations globally',
      ],
      status: 'In Development',
    },
    {
      id: 2,
      title: 'Quantum Dreams',
      type: 'Sci-Fi Feature Trilogy',
      icon: Film,
      timeline: '2026-2028',
      description: 'India\'s first big-budget science fiction trilogy exploring quantum mechanics, parallel universes, and the nature of reality. Partnering with international VFX studios for cutting-edge visual effects.',
      highlights: [
        'VFX partnership with Hollywood studios',
        'Original score by international composers',
        'Pan-India release in 5 languages',
        'IMAX format production',
      ],
      status: 'Pre-Development',
    },
    {
      id: 3,
      title: 'Raag Renaissance',
      type: 'Musical Film Series',
      icon: Music,
      timeline: '2026',
      description: 'A celebration of Indian classical music through cinema. Five interconnected films, each focusing on a different raga and its emotional journey through a contemporary story.',
      highlights: [
        'Collaboration with maestros',
        '50+ original compositions',
        'Fusion of classical and contemporary',
        'Festival circuit premiere planned',
      ],
      status: 'Concept Stage',
    },
    {
      id: 4,
      title: 'Digital Dreams Lab',
      type: 'Interactive Content Platform',
      icon: Sparkles,
      timeline: '2025-2026',
      description: 'An innovative digital platform for experimental storytelling. Viewers can influence storylines, explore multiple narratives, and experience cinema in entirely new ways.',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
    },
    {
      id: 5,
      title: 'Stage to Screen Initiative',
      type: 'Theatre Adaptation Program',
      icon: Clapperboard,
      timeline: 'Ongoing 2025-2030',
      description: 'A long-term initiative to adapt acclaimed theatre productions into films. Preserving theatrical performances while reaching wider audiences through cinema.',
      highlights: [
        '15+ plays planned for adaptation',
        'Mix of Hindi and regional theatre',
        'Original cast participation',
        'Hybrid theatrical-cinematic style',
      ],
      status: 'Partnership Development',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-purple-600 mb-6">
            <Lightbulb size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">Future Projects</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Visionary concepts and ambitious initiatives that will shape the future of our storytelling
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl mb-6 text-gray-900">Our Vision for Tomorrow</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              At Filmhouse Productions, we're not just creating content for today - we're building 
              the future of entertainment. Our future projects represent bold ambitions, innovative 
              formats, and stories that push the boundaries of what cinema can be.
            </p>
            <p>
              These projects are in various stages of development, from initial concepts to active 
              pre-production. Each represents our commitment to excellence, innovation, and the 
              power of compelling narratives.
            </p>
          </div>
        </div>

        {/* Future Projects */}
        <div className="space-y-8">
          {futureProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white border-gray-200 hover:border-red-600/50 hover:shadow-lg transition-all overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-12 gap-0">
                  {/* Icon Section */}
                  <div className="md:col-span-2 bg-gradient-to-br from-red-600 to-purple-600 p-8 flex items-center justify-center">
                    <project.icon size={64} className="text-white group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-10 p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-3xl mb-2">{project.title}</h2>
                        <p className="text-red-600">{project.type}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-purple-600/20 text-purple-600 border-purple-400/30">
                          {project.status}
                        </Badge>
                        <span className="text-sm text-gray-500">{project.timeline}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="text-sm tracking-wider text-gray-500 mb-4">KEY HIGHLIGHTS</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment & Partnerships */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-red-50 to-purple-50 border-red-200 shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4 text-gray-900">Looking for Investment Partners</h3>
              <p className="text-gray-600 mb-6">
                We're actively seeking strategic investment partners who share our vision for 
                groundbreaking cinema. Join us in creating the future of entertainment.
              </p>
              <button className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors rounded shadow-sm">
                Partner With Us
              </button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4 text-gray-900">Creative Collaborations</h3>
              <p className="text-gray-600 mb-6">
                Interested in collaborating on these ambitious projects? We're open to partnerships 
                with writers, directors, technicians, and creative visionaries.
              </p>
              <button className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 transition-colors rounded shadow-sm">
                Collaborate
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Development Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-purple-600 to-blue-600" />
            <div className="space-y-8">
              {['2025', '2026', '2027', '2028', '2030'].map((year, index) => (
                <div key={year} className="flex items-center justify-center">
                  <div className="w-1/2 text-right pr-8">
                    {index % 2 === 0 && (
                      <span className="text-gray-500">Multiple projects in development</span>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center relative z-10">
                    <span className="text-sm text-white">{year}</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    {index % 2 === 1 && (
                      <span className="text-gray-500">Major releases planned</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
