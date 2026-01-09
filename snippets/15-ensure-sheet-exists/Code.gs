function ensureSheet(name) {
  const ss = SpreadsheetApp.getActive();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function demoEnsureSheet() {
  const sh = ensureSheet('Logs');
  sh.appendRow(['Created/Found', new Date()]);
}
