import { useCallback, useMemo, useState } from 'react';
import type { Destination, District, FoodCategory } from '@/types';
import { storage } from '@/lib/storage';
import { defaultDestinations, defaultDistricts, defaultFoodCategories } from '@/data/defaults';

export function useDestinationsData() {
  const [items, setItems] = useState<Destination[]>(() => storage.loadDestinations(defaultDestinations));

  const persist = useCallback((next: Destination[]) => {
    setItems(next);
    storage.saveDestinations(next);
  }, []);

  const add = useCallback((item: Destination) => {
    persist([...items, item]);
  }, [items, persist]);

  const update = useCallback((id: number, patch: Partial<Destination>) => {
    persist(items.map(d => (d.id === id ? { ...d, ...patch } : d)));
  }, [items, persist]);

  const remove = useCallback((id: number) => {
    persist(items.filter(d => d.id !== id));
  }, [items, persist]);

  const nextId = useMemo(() => (items.length ? Math.max(...items.map(i => i.id)) + 1 : 1), [items]);

  return { items, setItems: persist, add, update, remove, nextId };
}

export function useFoodCategoriesData() {
  const [items, setItems] = useState<FoodCategory[]>(() => storage.loadFoodCategories(defaultFoodCategories));

  const persist = useCallback((next: FoodCategory[]) => {
    setItems(next);
    storage.saveFoodCategories(next);
  }, []);

  const add = useCallback((item: FoodCategory) => {
    persist([...items, item]);
  }, [items, persist]);

  const update = useCallback((id: string, patch: Partial<FoodCategory>) => {
    persist(items.map(c => (c.id === id ? { ...c, ...patch } : c)));
  }, [items, persist]);

  const remove = useCallback((id: string) => {
    persist(items.filter(c => c.id !== id));
  }, [items, persist]);

  return { items, setItems: persist, add, update, remove };
}

export function useDistrictsData() {
  const [items, setItems] = useState<District[]>(() => storage.loadDistricts(defaultDistricts));

  const persist = useCallback((next: District[]) => {
    setItems(next);
    storage.saveDistricts(next);
  }, []);

  const add = useCallback((item: District) => {
    persist([...items, item]);
  }, [items, persist]);

  const update = useCallback((id: string, patch: Partial<District>) => {
    persist(items.map(d => (d.id === id ? { ...d, ...patch } : d)));
  }, [items, persist]);

  const remove = useCallback((id: string) => {
    persist(items.filter(d => d.id !== id));
  }, [items, persist]);

  return { items, setItems: persist, add, update, remove };
}


