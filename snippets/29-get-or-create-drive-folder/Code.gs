function getOrCreateFolder(name) {
  const folders = DriveApp.getFoldersByName(name);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(name);
}

function demoFolder() {
  const f = getOrCreateFolder('Apps Script Outputs');
  Logger.log(f.getUrl());
}
