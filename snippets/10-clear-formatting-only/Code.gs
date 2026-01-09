function clearFormattingOnly() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getDataRange().clearFormat();
}
