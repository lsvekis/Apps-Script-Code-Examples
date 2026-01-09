function setUserPref() {
  PropertiesService.getUserProperties().setProperty('theme', 'dark');
}

function getUserPref() {
  Logger.log(PropertiesService.getUserProperties().getProperty('theme'));
}
