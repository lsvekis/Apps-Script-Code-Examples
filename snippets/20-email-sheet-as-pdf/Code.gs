function emailActiveSheetAsPdf() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const url = ss.getUrl().replace(/edit$/, '') +
    'export?format=pdf&gid=' + sh.getSheetId();

  const token = ScriptApp.getOAuthToken();
  const blob = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + token }
  }).getBlob().setName(sh.getName() + '.pdf');

  GmailApp.sendEmail('someone@example.com', 'Sheet PDF', 'See attached.', {
    attachments: [blob]
  });
}
