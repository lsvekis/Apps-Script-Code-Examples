function showSidebar() {
  const html = HtmlService
    .createHtmlOutput('<h3>Sidebar</h3><p>Hello!</p>')
    .setTitle('My Sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
}
