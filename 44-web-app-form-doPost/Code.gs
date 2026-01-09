function doGet() {
  const html = `
    <form method="post">
      <label>Name <input name="name"/></label>
      <button type="submit">Send</button>
    </form>`;
  return HtmlService.createHtmlOutput(html);
}

function doPost(e) {
  const name = e.parameter.name || '';
  return HtmlService.createHtmlOutput(`<p>Thanks, ${name}!</p>`);
}
