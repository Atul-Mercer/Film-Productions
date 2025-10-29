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
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
