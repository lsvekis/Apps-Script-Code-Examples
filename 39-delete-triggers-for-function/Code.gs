function deleteTriggersFor(functionName) {
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === functionName) ScriptApp.deleteTrigger(t);
  });
}

function demoDeleteHourly() {
  deleteTriggersFor('hourlyJob');
}
