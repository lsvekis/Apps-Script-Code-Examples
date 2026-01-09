function filterScoresToSheet() {
  const ss = SpreadsheetApp.getActive();
  const src = ss.getSheetByName('Sheet1') || ss.getActiveSheet();
  const dst = ss.getSheetByName('Top') || ss.insertSheet('Top');

  const data = src.getDataRange().getValues();
  const header = data[0];
  const rows = data.slice(1).filter(r => Number(r[1]) >= 90); // score in col B

  dst.clear();
  dst.getRange(1, 1, 1, header.length).setValues([header]);
  if (rows.length) dst.getRange(2, 1, rows.length, header.length).setValues(rows);
}
