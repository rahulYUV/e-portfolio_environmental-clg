import { Location } from '../types';
import { places } from '../data/places';
import { Search } from 'lucide-react';

interface LocationSearchProps {
  type: 'source' | 'destination';
  location: Location | null;
  setLocation: (location: Location | null) => void;
  darkMode: boolean;
}

const LocationSearch = ({ type, location, setLocation, darkMode }: LocationSearchProps) => {
  const handlePlaceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlace = places.find(place => place.id === e.target.value);
    if (selectedPlace) {
      setLocation(selectedPlace);
    }
  };

  return (
    <div className={`
      p-6 rounded-lg shadow-lg transition-all duration-300
      ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}
      transform hover:scale-[1.02] hover:shadow-xl
    `}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`
          p-2 rounded-full
          ${type === 'source' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
          ${darkMode ? 'bg-opacity-20' : ''}
        `}>
          <Search size={20} />
        </div>
        <h2 className={`
          text-xl font-semibold
          ${darkMode ? 'text-white' : 'text-gray-800'}
        `}>
          {type === 'source' ? 'Source Location' : 'Destination Location'}
        </h2>
      </div>
      
      <div className="space-y-4">
        <select
          value={location?.id || ''}
          onChange={handlePlaceSelect}
          className={`
            w-full p-3 rounded-lg border-2
            ${darkMode 
              ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-400' 
              : 'bg-white border-gray-300 focus:border-blue-500'
            }
            focus:ring-2 focus:ring-blue-200
            transition-all duration-200
          `}
        >
          <option value="">Select a location</option>
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
        
        {location && (
          <div className={`
            p-3 rounded-lg
            ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'}
            transition-all duration-200
          `}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-semibold">Latitude:</span>
                <span className="ml-2">{location.lat.toFixed(4)}</span>
              </div>
              <div>
                <span className="font-semibold">Longitude:</span>
                <span className="ml-2">{location.lng.toFixed(4)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSearch; 