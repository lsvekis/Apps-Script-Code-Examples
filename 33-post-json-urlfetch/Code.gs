function postJsonDemo() {
  const url = 'https://httpbin.org/post';
  const payload = { event: 'test', time: new Date().toISOString() };

  const res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  Logger.log(res.getResponseCode());
  Logger.log(res.getContentText());
}
