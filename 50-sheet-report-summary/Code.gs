function sheetReport() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();

  const report = [
    ['Spreadsheet', ss.getName()],
    ['Sheet', sh.getName()],
    ['Last Row', sh.getLastRow()],
    ['Last Column', sh.getLastColumn()],
    ['URL', ss.getUrl()],
    ['Generated', new Date()],
  ];

  const out = ss.getSheetByName('Report') || ss.insertSheet('Report');
  out.clear();
  out.getRange(1, 1, report.length, 2).setValues(report);
  out.autoResizeColumns(1, 2);
}
