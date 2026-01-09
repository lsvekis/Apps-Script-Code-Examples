function sendEmailDemo() {
  GmailApp.sendEmail(
    'someone@example.com',
    'Apps Script Test',
    'Hello! This is a test email from Apps Script.'
  );
}
