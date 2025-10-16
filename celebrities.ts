import { Celebrity } from '../types';

export const getCelebrityMatch = (style: string, vibe: string): Celebrity => {
  const celebrities: Record<string, Celebrity> = {
    'minimal-modern': {
      name: 'Kendall Jenner',
      matchPercentage: 95,
      style: 'Minimal Modern',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'bold-modern': {
      name: 'Rihanna',
      matchPercentage: 92,
      style: 'Bold Modern',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'traditional-bold': {
      name: 'Deepika Padukone',
      matchPercentage: 96,
      style: 'Traditional Bold',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'traditional-minimal': {
      name: 'Alia Bhatt',
      matchPercentage: 93,
      style: 'Traditional Minimal',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'minimal-traditional': {
      name: 'Meghan Markle',
      matchPercentage: 91,
      style: 'Elegant Minimal',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    'bold-traditional': {
      name: 'Priyanka Chopra',
      matchPercentage: 94,
      style: 'Bold Traditional',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    default: {
      name: 'Zendaya',
      matchPercentage: 90,
      style: 'Versatile Chic',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const key = `${vibe}-${style}`;
  return celebrities[key] || celebrities['default'];
};
