function createHourlyTrigger() {
  ScriptApp.newTrigger('hourlyJob')
    .timeBased()
    .everyHours(1)
    .create();
}

function hourlyJob() {
  Logger.log('Hourly job ran at ' + new Date());
}
