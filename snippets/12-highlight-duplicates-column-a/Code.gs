function highlightDuplicatesInColA() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getRange('A2:A' + sh.getLastRow());
  const values = range.getValues().flat();

  const counts = values.reduce((m, v) => {
    const k = String(v).trim();
    if (!k) return m;
    m[k] = (m[k] || 0) + 1;
    return m;
  }, {});

  const backgrounds = values.map(v => {
    const k = String(v).trim();
    if (!k) return ['#ffffff'];
    return [counts[k] > 1 ? '#ffcccc' : '#ffffff'];
  });

  range.setBackgrounds(backgrounds);
}
