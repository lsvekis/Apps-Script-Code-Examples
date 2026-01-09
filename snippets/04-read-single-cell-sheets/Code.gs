function readCellA1() {
  const sh = SpreadsheetApp.getActiveSheet();
  const value = sh.getRange('A1').getValue();
  Logger.log(value);
}
