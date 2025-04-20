import { useState, useEffect } from 'react';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LocationSearch from './components/LocationSearch';
import { Location } from './types';
import { places } from './data/places';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sourceLocation, setSourceLocation] = useState<Location | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<Location | null>(null);

  useEffect(() => {
    // Set Bharati Vidyapeeth as default source location
    const bharatiVidyapeeth = places.find(place => 
      place.id === 'bharati'
    );
    if (bharatiVidyapeeth) {
      setSourceLocation(bharatiVidyapeeth);
    }
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <LocationSearch
            type="source"
            location={sourceLocation}
            setLocation={setSourceLocation}
            darkMode={darkMode}
          />
          <LocationSearch
            type="destination"
            location={destinationLocation}
            setLocation={setDestinationLocation}
            darkMode={darkMode}
          />
        </div>
        <div className="h-[600px] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
          <Map 
            sourceLocation={sourceLocation}
            destinationLocation={destinationLocation}
            darkMode={darkMode}
          />
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;