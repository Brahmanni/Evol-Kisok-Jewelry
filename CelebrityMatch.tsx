import { Sparkles, ArrowRight } from 'lucide-react';
import { Celebrity } from '../types';

interface CelebrityMatchProps {
  celebrity: Celebrity;
  onContinue: () => void;
}

export const CelebrityMatch = ({ celebrity, onContinue }: CelebrityMatchProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <div className="mb-8 animate-bounce">
          <Sparkles className="w-16 h-16 mx-auto text-amber-400" />
        </div>

        <h2 className="font-serif text-4xl text-white mb-12">
          Your Style Match
        </h2>

        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-amber-400 rounded-3xl p-12 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5 animate-shimmer"></div>

          <div className="relative z-10">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-amber-400 mb-6 shadow-2xl">
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-6xl text-amber-400 mb-4">
                {celebrity.name}
              </h3>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-7xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                  {celebrity.matchPercentage}%
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Match</p>
                  <p className="text-white text-lg font-medium">Confidence</p>
                </div>
              </div>

              <div className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/30 rounded-full">
                <p className="text-amber-300 text-xl font-medium">
                  {celebrity.style} Style
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Your jewelry preferences align beautifully with {celebrity.name}'s signature style.
              Let's find pieces that capture this essence.
            </p>

            <button
              onClick={onContinue}
              className="group relative px-10 py-4 text-lg font-medium text-black bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Your Recommendations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
