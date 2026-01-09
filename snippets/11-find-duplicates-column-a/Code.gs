function findDuplicatesInColA() {
  const sh = SpreadsheetApp.getActiveSheet();
  const values = sh.getRange('A2:A').getValues().flat().filter(String);
  const seen = new Set();
  const dupes = new Set();

  values.forEach(v => {
    const key = String(v).trim();
    if (seen.has(key)) dupes.add(key);
    else seen.add(key);
  });

  Logger.log([...dupes]);
}
