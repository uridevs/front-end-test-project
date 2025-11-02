interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const EXPIRATION_TIME_MS = 60 * 60 * 1000; // 1h


export const setCache = <T>(key: string, data: T): void => {
  const entry: CacheEntry<T> = {
    data,
    timestamp: new Date().getTime(),
  };
  try {
    localStorage.setItem(key, JSON.stringify(entry));
  } catch (error) {
    console.error("Error saving to cache", error);
  }
};


export const getCache = <T>(key: string): T | null => {
  try {
    const entryString = localStorage.getItem(key);
    if (!entryString) {
      return null;
    }

    const entry = JSON.parse(entryString) as CacheEntry<T>;
    const now = new Date().getTime();

    if (now - entry.timestamp > EXPIRATION_TIME_MS) {
      localStorage.removeItem(key);
      return null;
    }

    return entry.data
  } catch (error) {
    console.error("Error reading from cache", error);
    return null;
  }
};