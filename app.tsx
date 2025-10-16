import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Survey } from './components/Survey';
import { CelebrityMatch } from './components/CelebrityMatch';
import { Recommendations } from './components/Recommendations';
import { SurveyAnswers } from './types';
import { getCelebrityMatch } from './data/celebrities';
import { getRecommendations } from './utils/recommendationEngine';

type Screen = 'welcome' | 'survey' | 'celebrity' | 'recommendations';

function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers>({});
  const [celebrity, setCelebrity] = useState<ReturnType<typeof getCelebrityMatch> | null>(null);
  const [recommendations, setRecommendations] = useState<ReturnType<typeof getRecommendations>>([]);

  const handleSurveyComplete = (answers: SurveyAnswers) => {
    setSurveyAnswers(answers);
    const match = getCelebrityMatch(
      answers.style || 'modern',
      answers.vibe || 'minimal'
    );
    setCelebrity(match);
    const recs = getRecommendations(answers);
    setRecommendations(recs);
    setScreen('celebrity');
  };

  const handleCelebrityComplete = () => {
    setScreen('recommendations');
  };

  const handleRestart = () => {
    setScreen('welcome');
    setSurveyAnswers({});
    setCelebrity(null);
    setRecommendations([]);
  };

  return (
    <>
      {screen === 'welcome' && <WelcomeScreen onStart={() => setScreen('survey')} />}
      {screen === 'survey' && <Survey onComplete={handleSurveyComplete} />}
      {screen === 'celebrity' && celebrity && (
        <CelebrityMatch celebrity={celebrity} onContinue={handleCelebrityComplete} />
      )}
      {screen === 'recommendations' && (
        <Recommendations
          products={recommendations}
          answers={surveyAnswers}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
