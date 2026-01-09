function onEdit(e) {
  const range = e.range;
  const sh = range.getSheet();
  if (sh.getName() !== 'Sheet1') return;

  if (range.getColumn() === 1 && range.getRow() > 1) {
    sh.getRange(range.getRow(), 2).setValue(new Date());
  }
}
