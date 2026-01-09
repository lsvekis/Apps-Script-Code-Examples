function protectHeaderRow() {
  const sh = SpreadsheetApp.getActiveSheet();
  const protection = sh.getRange('A1:D1').protect().setDescription('Protect header');
  protection.removeEditors(protection.getEditors()); // keep owner only
}
