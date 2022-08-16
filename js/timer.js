var dAte = new Date;
var localTime;
var localOffset;
var utc;
localTime = dAte.getTime();
localOffset = dAte.getTimezoneOffset() * 60000;
utc = localOffset + localTime;

var start = new Date(utc);
//var dateFrom = new Date('March 27, 2022 03:00:00'); 
var dateFrom = new Date();
//var dateTo = new Date('October 30, 2022 04:00:00');
var dateTo = new Date();

dateFrom.setMonth(2); // Rough dates and times for Daylight Savings
dateFrom.setDate(27);
dateFrom.setHours(3);
dateTo.setMonth(9);
dateTo.setDate(30);
dateTo.setHours(4);

if(start > dateFrom && start < dateTo)
{
	start.setHours(17, 0, 0); // 18 - No Daylight Savings; 17 - Daylight Savings Time
}
else
{
	start.setHours(18, 0, 0); 
}

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

	//console.log("NEXT SHOW STARTS IN: "+ hh + ":" + mm + ":" + ss);
			
	if (hh >= 20 && hh <= 24)
	{
		document.getElementById('time').innerHTML = "🔴 ON AIR ";
	}
	else
	{
		document.getElementById('time').innerHTML = "NEXT SHOW STARTS IN: "+ hh + ":" + mm + ":" + ss;
	}
}

//console.log("TIMER LOADED");

