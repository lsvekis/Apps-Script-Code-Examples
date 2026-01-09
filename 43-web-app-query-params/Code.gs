function doGet(e) {
  const name = (e && e.parameter && e.parameter.name) ? e.parameter.name : 'friend';
  return HtmlService.createHtmlOutput(`<h2>Hello, ${name}!</h2>`);
}
