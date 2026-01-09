function createFromTemplate() {
  const templateId = 'PASTE_TEMPLATE_DOC_ID';
  const folderId = 'PASTE_FOLDER_ID';

  const copy = DriveApp.getFileById(templateId).makeCopy('Filled Template', DriveApp.getFolderById(folderId));
  const doc = DocumentApp.openById(copy.getId());

  doc.getBody()
    .replaceText('{{DATE}}', Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd'))
    .replaceText('{{TITLE}}', 'Weekly Update');

  doc.saveAndClose();
  Logger.log(doc.getUrl());
}
