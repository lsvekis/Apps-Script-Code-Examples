function moveFileToFolder(fileId, folderId) {
  const file = DriveApp.getFileById(fileId);
  const folder = DriveApp.getFolderById(folderId);
  folder.addFile(file);

  // Optional: remove from root
  DriveApp.getRootFolder().removeFile(file);
}
