function fetchWithRetry(url) {
  let lastErr;
  for (let i = 0; i < 3; i++) {
    try {
      return UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    } catch (err) {
      lastErr = err;
      Utilities.sleep((i + 1) * 1000);
    }
  }
  throw lastErr;
}

function demoRetry() {
  const res = fetchWithRetry('https://example.com');
  Logger.log(res.getResponseCode());
}
