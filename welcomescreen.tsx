import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-20 bg-cover bg-center"></div>

      <div className="relative z-10 text-center px-8 max-w-4xl">
        <div className="mb-8 animate-shimmer">
          <Sparkles className="w-24 h-24 mx-auto text-amber-400" />
        </div>

        <h1 className="font-serif text-7xl md:text-8xl mb-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
          Evol Jewels
        </h1>

        <p className="text-2xl text-gray-300 mb-4 font-light">
          Your Personal Jewelry Stylist
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover your perfect jewelry match inspired by celebrity styles.<br/>
          Answer a few questions and let us curate pieces just for you.
        </p>

        <button
          onClick={onStart}
          className="group relative px-12 py-5 text-xl font-medium text-black bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
        >
          <span className="relative z-10 flex items-center gap-3">
            Begin Your Journey
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
};
