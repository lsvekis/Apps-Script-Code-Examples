function sortTable() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('A2:D' + sh.getLastRow()).sort({ column: 2, ascending: true });
}
