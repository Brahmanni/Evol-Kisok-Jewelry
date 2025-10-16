export interface SurveyAnswers {
  style?: string;
  occasion?: string;
  budget?: string;
  metal?: string;
  vibe?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  style: string[];
  occasion: string[];
  metal: string;
  vibe: string[];
}

export interface Celebrity {
  name: string;
  matchPercentage: number;
  style: string;
  image: string;
}
