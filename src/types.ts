export type DestinationFood = {
  name: string;
  description: string;
};

export type Destination = {
  id: number;
  name: string;
  description: string;
  description_news: string;
  story: string;
  images: string[];
  images_news: string[];
  foods: DestinationFood[];
  address: string;
  video?: string; // URL to local video or YouTube link
};

export type LocalTip = {
  id: number;
  title: string;
  description: string;
  image: string;
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
  images: string[]; // Changed from single image to array of images
  location?: string;
  video?: string; // URL to local video or YouTube link
  badge?: string; // e.g., 'Hot', 'Trending', 'New'
};

export type Dish = {
  name: string;
  description: string;
  images: string[]; // Changed from single image to array of images
  video?: string; // URL to local video or YouTube link
  badge?: string; // e.g., 'Hot', 'Trending', 'New'
};

export type District = {
  id: string;
  name: string;
  image: string;
  description: string;
  attractions: Attraction[];
  cuisine: Dish[];
  video?: string; // URL to local video or YouTube link
};
