function createCalendarEvent() {
  const cal = CalendarApp.getDefaultCalendar();
  const start = new Date();
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  cal.createEvent('Apps Script Event', start, end, { description: 'Created by script' });
}
