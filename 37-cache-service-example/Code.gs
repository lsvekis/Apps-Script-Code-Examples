function cachedHello() {
  const cache = CacheService.getScriptCache();
  const key = 'hello';
  const cached = cache.get(key);
  if (cached) return cached;

  const value = 'Hello at ' + new Date().toISOString();
  cache.put(key, value, 300);
  return value;
}
