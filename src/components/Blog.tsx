import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Badge } from './ui/badge';
export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Indian Cinema: Trends to Watch in 2025',
      excerpt: 'As we move into 2025, Indian cinema is experiencing a revolutionary transformation. From regional films going global to the rise of OTT platforms, here\'s what to expect.',
      image: 'https://images.unsplash.com/photo-1623375428145-4d276c83ce5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc2MTYyNzE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Rajesh Kumar',
      date: 'October 25, 2025',
      readTime: '8 min read',
      category: 'Industry Insights',
      tags: ['Trends', 'OTT', 'Future'],
      featured: true,
    },
    {
      id: 2,
      title: 'Behind the Scenes: Making of "The Last Horizon"',
      excerpt: 'Go behind the camera and discover the challenges, triumphs, and creative process that went into creating our latest blockbuster.',
      image: 'https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjE1NTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Priya Sharma',
      date: 'October 20, 2025',
      readTime: '12 min read',
      category: 'Production Diary',
      tags: ['BTS', 'Production', 'Filmmaking'],
      featured: false,
    },
    {
      id: 3,
      title: 'The Art of Screenplay Writing: Tips from Our Writers Room',
      excerpt: 'Learn the fundamentals of compelling screenplay writing from our award-winning writing team. Practical tips and techniques you can apply today.',
      image: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGRpcmVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxNjI3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Amit Verma',
      date: 'October 15, 2025',
      readTime: '10 min read',
      category: 'Craft & Technique',
      tags: ['Writing', 'Screenplay', 'Tutorial'],
      featured: false,
    },
    {
      id: 4,
      title: 'How We Built Our In-House VFX Pipeline',
      excerpt: 'A technical deep dive into our state-of-the-art VFX pipeline and the technology stack that powers our visual effects.',
      image: 'https://images.unsplash.com/photo-1622829118151-1cfabdf11a68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjYW1lcmElMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2MTUzOTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Tech Team',
      date: 'October 10, 2025',
      readTime: '15 min read',
      category: 'Technology',
      tags: ['VFX', 'Technology', 'Post-Production'],
      featured: false,
    },
    {
      id: 5,
      title: 'Breaking Barriers: Women in Film Production',
      excerpt: 'Celebrating the incredible women who are shaping the future of Indian cinema, both in front of and behind the camera.',
      image: 'https://images.unsplash.com/photo-1758639842438-718755aa57e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU1NzY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Priya Sharma',
      date: 'October 5, 2025',
      readTime: '7 min read',
      category: 'Industry Insights',
      tags: ['Women in Film', 'Diversity', 'Industry'],
      featured: false,
    },
    {
      id: 6,
      title: 'Sound Design Secrets: Creating Immersive Audio',
      excerpt: 'Explore the often-overlooked art of sound design and how it transforms the cinematic experience.',
      image: 'https://images.unsplash.com/photo-1695014192231-18462db3ebde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjE1NTYxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      author: 'Sound Department',
      date: 'September 30, 2025',
      readTime: '9 min read',
      category: 'Craft & Technique',
      tags: ['Sound Design', 'Audio', 'Post-Production'],
      featured: false,
    },
  ];

  const categories = ['All', 'Industry Insights', 'Production Diary', 'Craft & Technique', 'Technology'];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">Our Blog</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Insights, stories, and knowledge from the world of filmmaking
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 border border-white/20 rounded-full hover:border-red-600 hover:text-red-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card 
            key={post.id} 
            className="bg-white border-gray-200 overflow-hidden mb-16 hover:border-red-600/50 hover:shadow-lg transition-all group cursor-pointer"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">Featured</Badge>
                </div>
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="border-gray-300 text-gray-700 w-fit mb-4">
                  {post.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                </div>
                <button className="flex items-center gap-2 text-red-600 hover:gap-4 transition-all">
                  Read Full Article <ArrowRight size={18} />
                </button>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card 
              key={post.id} 
              className="bg-white border-gray-200 overflow-hidden hover:border-red-600/50 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs mb-3">
                  {post.category}
                </Badge>
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-gray-100 rounded border border-gray-200 text-gray-600 flex items-center gap-1"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-red-600 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                  Read More <ArrowRight size={14} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg p-12 text-center">
          <h2 className="text-4xl mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get the latest updates, behind-the-scenes content, and industry insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
