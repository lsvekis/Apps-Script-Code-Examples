function createNamedRange() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getRange('A1:B10');
  SpreadsheetApp.getActive().setNamedRange('MyRange', range);
}
