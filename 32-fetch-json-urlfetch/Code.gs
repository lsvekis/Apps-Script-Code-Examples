function fetchJsonDemo() {
  const res = UrlFetchApp.fetch('https://api.publicapis.org/entries');
  const json = JSON.parse(res.getContentText());
  Logger.log(`Count: ${json.count}`);
}
