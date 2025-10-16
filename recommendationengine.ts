import { Product, SurveyAnswers } from '../types';
import { products } from '../data/products';

export const getRecommendations = (answers: SurveyAnswers): Product[] => {
  return products
    .map(product => {
      let score = 0;

      // Style matching (30%)
      if (answers.style && product.style.some(s =>
        s.toLowerCase().includes(answers.style!.toLowerCase()) ||
        answers.style!.toLowerCase().includes(s.toLowerCase())
      )) {
        score += 30;
      }

      // Occasion matching (25%)
      if (answers.occasion && product.occasion.some(o =>
        o.toLowerCase() === answers.occasion!.toLowerCase()
      )) {
        score += 25;
      }

      // Budget matching (20%)
      if (answers.budget) {
        const budgetRanges: Record<string, [number, number]> = {
          'under-50k': [0, 50000],
          '50k-100k': [50000, 100000],
          '100k-150k': [100000, 150000],
          'above-150k': [150000, Infinity]
        };
        const [min, max] = budgetRanges[answers.budget] || [0, Infinity];
        if (product.price >= min && product.price <= max) {
          score += 20;
        }
      }

      // Metal preference matching (15%)
      if (answers.metal && product.metal === answers.metal) {
        score += 15;
      }

      // Vibe matching (10%)
      if (answers.vibe && product.vibe.some(v =>
        v.toLowerCase() === answers.vibe!.toLowerCase()
      )) {
        score += 10;
      }

      return { ...product, score };
    })
    .filter(product => product.score > 20) // Only show products with meaningful match
    .sort((a, b) => b.score - a.score)
    .slice(0, 12); // Top 12 recommendations
};
