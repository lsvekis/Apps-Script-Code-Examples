function writeBlock() {
  const sh = SpreadsheetApp.getActiveSheet();
  const values = [
    ['Name', 'Score'],
    ['Ava', 95],
    ['Noah', 88],
  ];
  sh.getRange(1, 1, values.length, values[0].length).setValues(values);
}
