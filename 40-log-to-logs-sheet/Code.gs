function logToSheet(message) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('Logs') || ss.insertSheet('Logs');
  sh.appendRow([new Date(), message]);
}

function demoLog() {
  logToSheet('Script started');
}
