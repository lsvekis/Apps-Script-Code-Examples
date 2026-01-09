function deleteEmptyRowsBasedOnColA() {
  const sh = SpreadsheetApp.getActiveSheet();
  const lastRow = sh.getLastRow();
  if (lastRow < 2) return;

  const values = sh.getRange(2, 1, lastRow - 1, 1).getValues().flat();
  for (let i = values.length - 1; i >= 0; i--) {
    if (!String(values[i]).trim()) sh.deleteRow(i + 2);
  }
}
