function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Tools')
    .addItem('Say Hello', 'sayHello')
    .addSeparator()
    .addItem('Run Cleanup', 'cleanup')
    .addToUi();
}

function sayHello() {
  SpreadsheetApp.getUi().alert('Hello from Apps Script!');
}

function cleanup() {
  SpreadsheetApp.getUi().alert('Cleanup placeholder.');
}
