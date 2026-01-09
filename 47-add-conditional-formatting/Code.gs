function addConditionalFormatting() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getRange('C2:C' + sh.getLastRow());

  const rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan(100)
    .setBackground('#fff2cc')
    .setRanges([range])
    .build();

  const rules = sh.getConditionalFormatRules();
  rules.push(rule);
  sh.setConditionalFormatRules(rules);
}
