export type DestinationFood = {
  name: string;
  description: string;
};

export type Destination = {
  id: number;
  name: string;
  description: string;
  description_news: string;
  images: string[];
  images_news: string[];
  foods: DestinationFood[];
};

export type FoodItem = {
  name: string;
  description: string;
  origin: string;
  image: string;
};

export type FoodCategory = {
  id: string;
  name: string;
  items: FoodItem[];
};

export type Attraction = {
  name: string;
  description: string;
  image: string;
  location?: string;
};

export type Dish = {
  name: string;
  description: string;
  image: string;
};

export type District = {
  id: string;
  name: string;
  image: string;
  description: string;
  attractions: Attraction[];
  cuisine: Dish[];
};
