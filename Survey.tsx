import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SurveyAnswers } from '../types';

interface SurveyProps {
  onComplete: (answers: SurveyAnswers) => void;
}

const questions = [
  {
    id: 'style',
    question: 'What describes your style best?',
    options: [
      { value: 'modern', label: 'Modern & Contemporary', description: 'Clean lines, sleek designs' },
      { value: 'classic', label: 'Classic & Timeless', description: 'Traditional elegance' },
      { value: 'traditional', label: 'Traditional & Ethnic', description: 'Rich cultural heritage' },
      { value: 'minimalist', label: 'Minimalist & Subtle', description: 'Simple sophistication' }
    ]
  },
  {
    id: 'occasion',
    question: 'When will you wear this jewelry?',
    options: [
      { value: 'wedding', label: 'Wedding & Special Events', description: 'Once in a lifetime moments' },
      { value: 'evening', label: 'Evening Occasions', description: 'Parties and celebrations' },
      { value: 'work', label: 'Work & Professional', description: 'Daily sophistication' },
      { value: 'casual', label: 'Casual Everyday', description: 'Comfortable daily wear' }
    ]
  },
  {
    id: 'budget',
    question: 'What is your budget range?',
    options: [
      { value: 'under-50k', label: 'Under ₹50,000', description: 'Elegant & affordable' },
      { value: '50k-100k', label: '₹50,000 - ₹1,00,000', description: 'Premium selection' },
      { value: '100k-150k', label: '₹1,00,000 - ₹1,50,000', description: 'Luxury pieces' },
      { value: 'above-150k', label: 'Above ₹1,50,000', description: 'Statement jewelry' }
    ]
  },
  {
    id: 'metal',
    question: 'Which metal do you prefer?',
    options: [
      { value: 'gold', label: 'Yellow Gold', description: 'Classic warmth' },
      { value: 'white-gold', label: 'White Gold', description: 'Modern elegance' },
      { value: 'rose-gold', label: 'Rose Gold', description: 'Romantic charm' },
      { value: 'platinum', label: 'Platinum', description: 'Ultimate luxury' }
    ]
  },
  {
    id: 'vibe',
    question: 'What vibe are you going for?',
    options: [
      { value: 'minimal', label: 'Minimal & Understated', description: 'Less is more' },
      { value: 'bold', label: 'Bold & Statement', description: 'Turn heads' },
      { value: 'traditional', label: 'Traditional & Ornate', description: 'Rich details' },
      { value: 'modern', label: 'Modern & Edgy', description: 'Contemporary flair' }
    ]
  }
];

export const Survey = ({ onComplete }: SurveyProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers), 300);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col">
      <div className="h-2 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="max-w-4xl w-full">
          <div className="mb-8 text-center">
            <p className="text-amber-400 text-lg mb-4 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <h2 className="font-serif text-5xl text-white mb-4">
              {question.question}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.value)}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-105 ${
                  answers[question.id as keyof SurveyAnswers] === option.value
                    ? 'border-amber-400 bg-amber-400/10'
                    : 'border-gray-700 bg-gray-900/50 hover:border-amber-400/50'
                }`}
              >
                <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {option.label}
                </h3>
                <p className="text-gray-400 text-lg">
                  {option.description}
                </p>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mx-auto"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
