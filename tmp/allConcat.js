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

    var alarmHour = $('select#hour').val();
    var alarmMinute = $('select#minute').val();
    var alarmMeridian = $('select#meridian').val();
    var alarm = alarmHour + ":" + alarmMinute + " " + alarmMeridian;

    setInterval(wakeUp, 1000);
    function wakeUp() {
      if (currentTime === alarm) {
        alert("time to wake up!");
      }
      else {
        console.log("keep sleeping zzz");
      }
    };
  });
});


