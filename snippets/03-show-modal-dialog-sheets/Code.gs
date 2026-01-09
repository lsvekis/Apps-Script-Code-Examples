function showDialog() {
  const html = HtmlService
    .createHtmlOutput('<h2>Dialog</h2><p>This is a modal.</p>')
    .setWidth(400)
    .setHeight(200);
  SpreadsheetApp.getUi().showModalDialog(html, 'My Dialog');
}
