$(document).ready(function(){
$.ajax({
	type: "POST",
	url: "https://api.uptimerobot.com/v2/getMonitors",
	data: {
		"api_key":"m780702533-43e04b71b8352b110e418de9",
	},
	dataType: "json"
})
.done(function(response) {
	if(response.stat == "ok"){
		var NewText = $($("li.dropdown ul li a[href='https://status.gphofficial.com/\']")[0]).text() + " ✔"
		$($("li.dropdown ul li a[href='https://status.gphofficial.com/\']")[0]).text(NewText);
	}else{
		var NewText = $($("li.dropdown ul li a[href='https://status.gphofficial.com/\']")[0]).text() + " " + '&#10004;'
		$($("li.dropdown ul li a[href='https://status.gphofficial.com/\']")[0]).text(NewText);
	}
	
})
.fail(function (jqXHR, exception) {
	var msg_err = "";
	if (jqXHR.status === 0) {
		msg_err = "Not connect. Verify Network.";
	} else if (jqXHR.status == 404) {
		msg_err = "Requested page not found. [404]";
	} else if (jqXHR.status == 500) {
		msg_err = "Internal Server Error [500].";
	} else if (exception === "parsererror") {
		msg_err = "Requested JSON parse failed.";
	} else if (exception === "timeout") {
		msg_err = "Time out error.";
	} else if (exception === "abort") {
		msg_err = "Ajax request aborted.";
	} else {
		msg_err = "Uncaught Error. "+ jqXHR.responseText;
	}
	alert(msg_err);
})
.always(function() {
	alert("complete");
});
});