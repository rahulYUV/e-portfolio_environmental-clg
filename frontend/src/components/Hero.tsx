import { MapPin, Navigation } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Discover Pune's Best Routes
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5" />
              <span>From Bharati Vidyapeeth</span>
            </div>
            <Navigation className="w-5 h-5 text-white" />
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5" />
              <span>To Your Destination</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Find the most efficient path to your favorite destinations in Pune
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="font-semibold">Real-time Navigation</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="font-semibold">Road Network Visualization</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="font-semibold">Interactive Map</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 