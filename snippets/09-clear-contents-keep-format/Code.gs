function clearContentsOnly() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('A2:Z').clearContent();
}
