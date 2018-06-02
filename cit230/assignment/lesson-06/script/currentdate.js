var myDate = new Date();

var weekDays = ['Sunday', 'Monday', 'Tuesday','Wendesday','Thursday', 'Friday', 'Saturday'];

var dayOfWeek = myDate.getDay();
var dayOfWeekString = weekDays[dayOfWeek];

var dayOfMonth = myDate.getDate();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","Devember"];
var month = myDate.getMonth();
var monthString = months[month];

var fullYear = myDate.getFullYear();
var fullDate = dayOfWeekString + ", " + dayOfMonth + " " + monthString + " " + fullYear;

document.getElementById('currentdate').innerHTML = fullDate;