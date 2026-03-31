import { Content } from '../models/content';

export const CARS: Content[] = [
  {
    id: 1,
    title: 'Model S',
    creator: 'Tesla',
    type: 'Electric Sedan',
    description: 'A high-performance electric luxury vehicle with Ludicrous mode.',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 94990,
    releaseDate: new Date('2024-01-15')
  },
  {
    id: 2,
    title: 'Model 3',
    creator: 'Tesla',
    type: 'Electric Sedan',
    description: 'The best-selling electric car in the world, focused on efficiency.',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 42990,
    releaseDate: new Date('2024-02-10')
  },
  {
    id: 3,
    title: 'Model X',
    creator: 'Tesla',
    type: 'Electric SUV',
    description: 'Featuring falcon-wing doors and incredible towing capacity.',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 109990,
    releaseDate: new Date('2023-11-05')
  },
  {
    id: 4,
    title: 'Model Y',
    creator: 'Tesla',
    type: 'Electric Crossover',
    description: 'A versatile utility vehicle with a spacious interior for families.',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 58990,
    releaseDate: new Date('2024-03-01')
  },
  {
    id: 5,
    title: 'Cybertruck',
    creator: 'Tesla',
    type: 'Electric Truck',
    description: 'Built with an ultra-hard stainless-steel exoskeleton and armored glass.',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 81990,
    releaseDate: new Date('2023-12-25')
  },
  {
    id: 6,
    title: 'Roadster',
    creator: 'Tesla',
    type: 'Electric Sports Car',
    description: 'Designed for performance and efficiency, achieving 0-60 in 1.9 seconds.',
    imageUrl: 'https://www.motortrend.com/uploads/2024/01/1-2024-Tesla-Model-S-front-view.jpg',
    price: 250000,
    releaseDate: new Date('2024-04-15')
  }
];