function setConfig() {
  PropertiesService.getScriptProperties().setProperty('API_KEY', 'demo-key');
}

function getConfig() {
  const key = PropertiesService.getScriptProperties().getProperty('API_KEY');
  Logger.log(key);
}
