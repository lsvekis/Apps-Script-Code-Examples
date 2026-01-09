function appendRow() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.appendRow([new Date(), 'Event', Session.getActiveUser().getEmail()]);
}
