var AlarmClock = function(alarmTime) {
  this.alarmTime = alarmTime;
};

AlarmClock.prototype.getAlarmTime = function() {
  return this.alarmTime;
};

exports.AlarmClock = AlarmClock;
