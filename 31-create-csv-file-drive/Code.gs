function createCsvFile() {
  const rows = [
    ['Name', 'Score'],
    ['Ava', 95],
    ['Noah', 88],
  ];
  const csv = rows.map(r => r.map(String).join(',')).join('\n');
  const file = DriveApp.createFile('scores.csv', csv, MimeType.CSV);
  Logger.log(file.getUrl());
}
