import type { Destination, District, FoodCategory } from '@/types';

const KEY_DESTINATIONS = 'ag_destinations';
const KEY_FOOD_CATEGORIES = 'ag_food_categories';
const KEY_DISTRICTS = 'ag_districts';

function parse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const storage = {
  loadDestinations(defaultValue: Destination[]): Destination[] {
    return parse<Destination[]>(localStorage.getItem(KEY_DESTINATIONS), defaultValue);
  },
  saveDestinations(data: Destination[]) {
    localStorage.setItem(KEY_DESTINATIONS, JSON.stringify(data));
  },

  loadFoodCategories(defaultValue: FoodCategory[]): FoodCategory[] {
    return parse<FoodCategory[]>(localStorage.getItem(KEY_FOOD_CATEGORIES), defaultValue);
  },
  saveFoodCategories(data: FoodCategory[]) {
    localStorage.setItem(KEY_FOOD_CATEGORIES, JSON.stringify(data));
  },

  loadDistricts(defaultValue: District[]): District[] {
    return parse<District[]>(localStorage.getItem(KEY_DISTRICTS), defaultValue);
  },
  saveDistricts(data: District[]) {
    localStorage.setItem(KEY_DISTRICTS, JSON.stringify(data));
  },
};


