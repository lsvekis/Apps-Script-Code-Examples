function listUpcomingEvents() {
  const cal = CalendarApp.getDefaultCalendar();
  const now = new Date();
  const future = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const events = cal.getEvents(now, future).slice(0, 10);

  events.forEach(e => Logger.log(`${e.getTitle()} — ${e.getStartTime()}`));
}
