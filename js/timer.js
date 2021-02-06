var dAte = new Date;
var localTime;
var localOffset;
var utc;
localTime = dAte.getTime();
localOffset = dAte.getTimezoneOffset() * 60000;
utc = localOffset + localTime;

var start = new Date(utc);
start.setHours(18, 0, 0); // 18 - No Daylight Savings; 17 - Daylight Savings Time

function pad(num)
{
	return ("0" + parseInt(num)).substr(-2);
}

function tick()
{
	var currentDate = new Date();
	var currentLocalTime = currentDate.getTime();
	var currentLocalOffset = currentDate.getTimezoneOffset() * 60000;
	var currentUtc = currentLocalTime + currentLocalOffset;
	var now = new Date(currentUtc);
	
	
	if (now > start)// too late, go to tomorrow
	{ 
	  start.setDate(start.getDate() + 1);
	}
	var remain = ((start - now) / 1000);
	var hh = pad((remain / 60 / 60) % 60);
	var mm = pad((remain / 60) % 60);
	var ss = pad(remain % 60);

	console.log("NEXT SHOW STARTS IN: "+ hh + ":" + mm + ":" + ss);
			
	if (hh >= 20 && hh <= 24)
	{
		document.getElementById('time').innerHTML = "🔴 ON AIR ";
	}
	else
	{
		document.getElementById('time').innerHTML = "NEXT SHOW STARTS IN: "+ hh + ":" + mm + ":" + ss;
	}
}

console.log("TIMER LOADED");

