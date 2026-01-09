function readNamedRange() {
  const range = SpreadsheetApp.getActive().getRangeByName('MyRange');
  if (!range) throw new Error('Named range not found');
  Logger.log(range.getValues());
}
