function writeToB2() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('B2').setValue('Done!');
}
