var AlarmClock = require("./../js/alarm.js").AlarmClock;

$(document).ready(function(){
  setInterval(updateTime, 1000);
  function updateTime() {
    $('#time').text(moment().format("h:mm:ss a"));
  };

  $('#alarmForm').submit(function(event){
    event.preventDefault();
    var hour = (moment().format('hh'));
    var minute = (moment().format('mm'));
    var meridian = (moment().format('a'));
    var currentTime = hour + ":" + minute + " " + meridian;


    console.log(currentTime);

    var alarmHour = $('select#hour').val();
    var alarmMinute = $('select#minute').val();
    var alarmMeridian = $('select#meridian').val();
    var alarm = alarmHour + ":" + alarmMinute + " " + alarmMeridian;

    var newAlarm = new AlarmClock(alarm);
    console.log(alarm);

    setInterval(wakeUp, 1000);
    function wakeUp() {
      var currentFullTime = moment().format('h:mm a');
      if (currentFullTime === newAlarm.getAlarmTime) {
        console.log("time to wake up!");
      }
      else {
        console.log("keep sleeping zzz");
      }
    };
  });
});
