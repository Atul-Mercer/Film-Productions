import { Card, CardContent } from './ui/card';
import { 
  PenTool, 
  Video, 
  Lightbulb, 
  Camera, 
  Sparkles, 
  Film,
  Clapperboard,
  Megaphone,
  Palette,
  Theater
} from 'lucide-react';
export function Services() {
  const services = [
    {
      id: 1,
      icon: PenTool,
      title: 'Writing/Editing',
      description: 'Professional screenplay writing, story development, and script editing services. Our team of experienced writers brings your vision to life with compelling narratives.',
      features: [
        'Original screenplay development',
        'Script doctoring & editing',
        'Dialogue polishing',
        'Story consultation',
      ],
    },
    {
      id: 7,
      icon: Clapperboard,
      title: 'Video Production',
      description: 'Comprehensive video production services covering the entire spectrum from feature films to micro-content.',
      features: [
        'Feature Films',
        'Web Series',
        'Music Videos & Songs',
        'Short Films',
        'Micro Content',
      ],
    },
    {
      id: 8,
      icon: Megaphone,
      title: 'Advertising',
      description: 'Creative advertising solutions including TV commercials, digital ads, and brand campaigns that captivate and convert.',
      features: [
        'TV commercials (TVC)',
        'Digital advertising',
        'Brand campaigns',
        'Product launches',
      ],
    },
    {
      id: 9,
      icon: Palette,
      title: 'Ad Design',
      description: 'Comprehensive design services for print and digital advertising materials with a focus on visual storytelling.',
      features: [
        'Print ad design',
        'Digital banner creation',
        'Social media creatives',
        'Brand identity design',
      ],
    },
    {
      id: 2,
      icon: Video,
      title: 'Video Editing',
      description: 'State-of-the-art post-production services with the latest editing technology. We transform raw footage into polished, professional content.',
      features: [
        'Professional video editing',
        'Color grading & correction',
        'Sound design & mixing',
        'VFX integration',
      ],
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Content Strategy',
      description: 'Strategic content planning and development to ensure your project resonates with target audiences and achieves maximum impact.',
      features: [
        'Content planning & development',
        'Audience analysis',
        'Distribution strategy',
        'Brand storytelling',
      ],
    },
    {
      id: 4,
      icon: Camera,
      title: 'Corporate Photography',
      description: 'Professional photography services for corporate events, product launches, and brand campaigns with a cinematic touch.',
      features: [
        'Event photography',
        'Product photography',
        'Corporate portraits',
        'Behind-the-scenes coverage',
      ],
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Video Animation',
      description: 'Creative animation services including 2D, 3D, motion graphics, and visual effects for films, commercials, and digital content.',
      features: [
        '2D & 3D animation',
        'Motion graphics',
        'Character animation',
        'Visual effects',
      ],
    },
    {
      id: 6,
      icon: Film,
      title: 'Videography',
      description: 'Professional videography services with experienced cinematographers and cutting-edge equipment for all types of projects.',
      features: [
        'Multi-camera setups',
        'Drone cinematography',
        'Steadicam operations',
        'Live event coverage',
      ],
    },
   
    {
      id: 10,
      icon: Theater,
      title: 'Theatre Plays (Hindi)',
      description: 'Full-scale theatre production services in Hindi, from script to stage, with experienced directors and performers.',
      features: [
        'Play production & direction',
        'Set design & construction',
        'Costume & makeup',
        'Performance management',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Comprehensive production services tailored to bring your creative vision to life
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl mb-6 text-gray-900">End-to-End Production Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-600 space-y-4">
              <p>
                Filmhouse Productions offers a complete suite of production services, from initial 
                concept to final delivery. Whether you're planning a feature film, web series, 
                commercial campaign, or theatre production, we have the expertise and resources 
                to execute your vision flawlessly.
              </p>
              <p>
                Our team combines creative excellence with technical proficiency, ensuring every 
                project receives the attention and quality it deserves.
              </p>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                We work with brands, agencies, independent filmmakers, and creative professionals 
                across industries. Our services are scalable and customizable, designed to meet the 
                unique requirements of each project.
              </p>
              <p>
                With state-of-the-art equipment, experienced professionals, and a proven track 
                record, we deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-white border-gray-200 hover:border-red-600/50 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Our Production Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, requirements, and objectives in detail.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Our team develops a comprehensive production plan and timeline.',
              },
              {
                step: '03',
                title: 'Production',
                description: 'We execute the project with precision and creative excellence.',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final product delivered with post-production support.',
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="text-5xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{phase.title}</h3>
                <p className="text-gray-500 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-purple-600 rounded-lg p-12 shadow-lg">
          <h2 className="text-4xl mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-white/95">
            Let's discuss how we can bring your creative vision to life
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 hover:bg-white/90 transition-colors rounded shadow-md">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
