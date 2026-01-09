function createForm() {
  const form = FormApp.create('Feedback Form');
  form.addTextItem().setTitle('Name').setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Rate the session')
    .setChoiceValues(['1', '2', '3', '4', '5'])
    .setRequired(true);

  Logger.log(form.getEditUrl());
}
