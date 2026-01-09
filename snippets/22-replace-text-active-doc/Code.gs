function replaceTextInActiveDoc() {
  const doc = DocumentApp.getActiveDocument();
  doc.getBody().replaceText('{{NAME}}', 'Lars');
}
