function createDocReport() {
  const doc = DocumentApp.create('My Report');
  const body = doc.getBody();
  body.appendParagraph('Report Title').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('Generated: ' + new Date());
  Logger.log(doc.getUrl());
}
