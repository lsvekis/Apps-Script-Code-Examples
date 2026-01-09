function doGet() {
  const data = { ok: true, time: new Date().toISOString() };
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
