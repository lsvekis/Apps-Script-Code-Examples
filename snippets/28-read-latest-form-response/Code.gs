function logLatestFormResponse() {
  const form = FormApp.getActiveForm();
  const responses = form.getResponses();
  if (!responses.length) return;

  const last = responses[responses.length - 1];
  const items = last.getItemResponses().map(r => `${r.getItem().getTitle()}: ${r.getResponse()}`);
  Logger.log(items.join('\n'));
}
