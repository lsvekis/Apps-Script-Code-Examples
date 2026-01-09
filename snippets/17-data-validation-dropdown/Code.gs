function addDropdown() {
  const sh = SpreadsheetApp.getActiveSheet();
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Todo', 'Doing', 'Done'], true)
    .setAllowInvalid(false)
    .build();

  sh.getRange('B2:B20').setDataValidation(rule);
}
