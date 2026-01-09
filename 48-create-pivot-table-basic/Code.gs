function createPivot() {
  const ss = SpreadsheetApp.getActive();
  const src = ss.getActiveSheet();
  const dataRange = src.getRange(1, 1, src.getLastRow(), src.getLastColumn());

  const pivotSheet = ss.getSheetByName('Pivot') || ss.insertSheet('Pivot');
  pivotSheet.clear();

  const pivotAnchor = pivotSheet.getRange('A1');
  const pivot = pivotAnchor.createPivotTable(dataRange);

  // Example: row group by column 1, sum column 2
  pivot.addRowGroup(1);
  pivot.addPivotValue(2, SpreadsheetApp.PivotTableSummarizeFunction.SUM);
}
