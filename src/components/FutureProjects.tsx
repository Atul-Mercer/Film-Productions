import { Card, CardContent } from './ui/card';
import { Lightbulb, Film, Tv, Music, Clapperboard, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

import COK from '../assets/coming/COK.png';
import MG from '../assets/coming/GM.png';
import AMBIKA from '../assets/coming/AMBIKA.png';
import CHHUTE from '../assets/coming/CHHUTE.png';
import HOP from '../assets/coming/HOP.png';
import MICH from '../assets/coming/MICH.png';
import RETINA from '../assets/coming/RETINA.png';
import THELIVES from '../assets/coming/THELIVES.png';
import YHW from '../assets/coming/YHW.png';
import NAYANTARA from '../assets/coming/NAYANTARA.png';
import DHADEECHA from '../assets/coming/DHADEECHA.png'

export function FutureProjects() {
  const futureProjects = [
    {
      id: 1,
      title: 'COK (Film)',
      type: 'Genre- Suspense Thriller, Social Justice',
      director: 'Director : Deep Mala Srivastava',
      Writer : 'Writer : Deep Mala Srivastava',
      image: COK,
      timeline: '2026-2027',
description: `A remorseless rapist is living his life as per his
convenience after escaping justice under the juvenile
law loophole. But freedom comes with a sound he
cannot silence - a knock at his door that turns his life
into a waking nightmare. Karma always arrives
uninvited.`,
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
      title: 'HOP (Film)',
      type: 'Genre- Crime Thriller, Murder Mystery',
      director: 'Director : Deep Mala Srivastava',
      Writer : 'Writer : Deep Mala Srivastava',
      image: HOP,
      timeline: '2026-2028',
      description: 'Eight people, living under the same roof, share everything but secretly want to tear each other apart. When mysterious deaths begin to occur, the true story unfolds.',
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
      title: 'Nayantara (Film)',
      type: 'Genre- Psychological Crime Thriller.',
      director: 'Director : Deep Mala Srivastava',
      Writer : 'Writer : Deep Mala Srivastava',
      image: NAYANTARA,
      timeline: '2026',
      description: 'After years of failed attempts to awaken her artistic soul, an unexpected and mysterious twist leads a beautiful young woman toward the destiny she was always meant to embrace. However, she is unconcerned about the harm she causes to the world around her.',
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
      title: '1300 Gm’s (Film)',
      type: 'Genre- Suspense Thriller',
      image: MG,
      timeline: '2025-2026',
      description: 'What begins as a routine psychological study turns sinister when Dr. Kawatra’s interviews with violent inmates unravel chilling secrets that leave him and Inspector Jogi deeply disturbed.',
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Deep Mala Srivastava',
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
      title: 'Michchhami Dukkadam (Film)',
      type: 'Genre- Suspense, Crime Thriller',
      image: MICH,
      timeline: 'Ongoing 2025-2030',
      director: 'Director : Deep Mala Srivastava',
      Writer : 'Writer :  Deep Mala Srivastava & Alok Darshi',
      description: 'This is the story of how, in todays changing environment, a happy family suddenly becomes the victim of an incident which they could never have imagined even in their wildest dreams, how the thought of a homosexual relationship becomes witness to a gruesome murder and how an inspector who is investigating this case gets deeply entangled in the web of events..',
      highlights: [
        '15+ plays planned for adaptation',
        'Mix of Hindi and regional theatre',
        'Original cast participation',
        'Hybrid theatrical-cinematic style',
      ],
      status: 'Partnership Development',
    },
    {
      id: 6,
      title: 'YHW (Film)',
      type: 'Genre - Romantic Drama',
      image: YHW,
      timeline: '2025-2026',
      description: 'She was a young woman, he a man burning with passion. Their paths crossed in the bustling heart of Delhi, where amidst the chaos, they found love- intense, consuming, and eternal. They longed to lose themselves in each other forever. But destiny intervened, and a sudden tragedy shattered their world, leaving their lives drained of color and turning two lovers into strangers once more.',
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Deep Mala Srivastava',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
    },
    {
      id: 7,
      title: 'Dhadeecha (Film)',
      type: 'Genre - Romantic Drama, Social.',
      image: DHADEECHA,
      timeline: '2025-2026',
      description: 'This story tells how a mother saves her daughter from an evil practice and the daughter saves other girls of her tribe. The story is also about love that is rejected by the society but true love has never bowed down till date is seen through this film.',
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Deep Mala Srivastava',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
    },
    {
      id: 8,
      title: 'Retina (Short film)',
      type: 'Genre - Suspense Thriller',
      image: RETINA,
      timeline: '2025-2026',
description: `Inside a quiet house, two women find themselves
trapped—not by walls, but by a man’s control. What begins as ordinary domestic life slowly unravels into a web of manipulation, desire, and silent
suffering. When fear spreads too much, something
has to be done, the women must decide: will they
continue to endure, or will they rise against the
forces that confine them…`,
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Deep Mala & Alok Darshi',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
    },
    {
      id: 9,
      title: 'Ambika (Short film)',
      type: 'Genre - Suspense Drama',
      image: AMBIKA,
      timeline: '2025-2026',
      description: 'This story is inspired by a true event that captures the essence of human resilience and the ultimate depth of emotional attachment. It portrays how far a person can go for the ones they love. When hunger turns human into a beast, and society into a demon, the boundaries between right and wrong begin to fade. In those haunting moments, only the faint flame of survival remains-flickering, fragile, yet unyielding.',
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Deep Mala Srivastava',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
    },
    {
      id: 10,
      title: 'Chhute Huye Log (Short film)',
      type: 'Genre - Suspense Drama',
      image: CHHUTE,
      timeline: '2025-2026',
      description: 'During a journey far from home, Akshay meets an elderly man - a father who has spent years longing to see his children. He once raised them with love, gave them education, and sent them abroad to build successful lives. Yet, in his twilight years, he is left with silence and memories. Moved by the old man’s warmth and unspoken pain, Akshay begins to feel a bond he never expected - something between empathy and lost affection. But a sudden revelation shatters everything he believed about the man, their bond, and perhaps himself.',
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Deep Mala Srivastava',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
    },
    {
      id: 11,
      title: 'The Lies We Hold (Short film)',
      type: 'Genre - Suspense Drama',
      image: THELIVES,
      timeline: '2025-2026',
      description: 'Who is truly right-me, or the other person? In today’s world, everyone is desperate to prove themselves right and others wrong. The most unsettling truth, however, is that people no longer seek honesty; they seek justification. They live wrapped in the comfort of their own delusions. This is the story of Sumit - a young man caught in that same web of self-righteousness and confusion. As he found out something about his girlfriend that relationship begins to crumble, he confronts not just his girlfriend’s truths, but his own.',
        director: 'Director : Deep Mala Srivastava',
        Writer : 'Writer : Ankit Srivastava & Deep Mala',
      highlights: [
        'AI-driven narrative branching',
        'VR/AR integration',
        '10+ experimental short films',
        'Collaboration with tech partners',
      ],
      status: 'Technology R&D',
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
          <h1 className="text-3xl md:text-4xl mb-6 text-gray-900">Future Projects</h1>
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
    {/* Icon Section – NO GRADIENT, IMAGE COVERS FULL AREA */}
    <div className="md:col-span-2 flex items-center justify-center overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content Section */}
    <div className="md:col-span-10 p-8 md:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-3xl mb-2">{project.title}</h2>
          <p className="text-red-600">{project.type}</p>
          <p className="text-red-600">{project.director}</p>
          <p className="text-red-600">{project.Writer}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {/* <Badge className="bg-purple-600/20 text-purple-600 border-purple-400/30">
            {project.status}
          </Badge> */}
          <span className="text-sm text-gray-500">{project.timeline}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.description}
      </p>
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
