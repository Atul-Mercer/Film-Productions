import { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { UpcomingProjects } from './components/UpcomingProjects';
import { FutureProjects } from './components/FutureProjects';
import { Services } from './components/Services';
import { InHouseTalent } from './components/InHouseTalent';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'upcoming':
        return <UpcomingProjects />;
      case 'future':
        return <FutureProjects />;
      case 'services':
        return <Services />;
      case 'talent':
        return <InHouseTalent />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-900">
      {/* Header */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* ✅ Pass setCurrentPage prop here */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
