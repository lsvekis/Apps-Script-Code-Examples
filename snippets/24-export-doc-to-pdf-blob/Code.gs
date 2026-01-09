function docToPdfBlob(docId) {
  const file = DriveApp.getFileById(docId);
  return file.getBlob().getAs(MimeType.PDF).setName(file.getName() + '.pdf');
}
