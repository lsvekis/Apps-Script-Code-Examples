function readAllData() {
  const sh = SpreadsheetApp.getActiveSheet();
  const data = sh.getDataRange().getValues(); // 2D array
  Logger.log(`Rows: ${data.length}, Cols: ${data[0].length}`);
}
