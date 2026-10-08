export type Restaurant = {
  id: number;
  name: string;
  description: string;
  cuisine: CuisineType;
  imageUrl: string;
  rating: number;
  deliveryTimeMin: number;
  deliveryTimeMax: number;
  deliveryFee: number;
  minimumOrderValue: number;
  isActive: boolean;
};

export type CuisineType = 'Italian' | 'Chinese' | 'Mexican' | 'Indian' | 'American' | 'Japanese' | 'Mediterranean' | 'French' | 'Thai' | 'Spanish';