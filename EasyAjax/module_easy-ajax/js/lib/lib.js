function printer (message, level = "info", multiline = false) {
	let date = new Date().toLocaleString()
	let delimiter = ""

	if (multiline) {
		delimiter = "<br>"
	}
	else {
		delimiter = " | "
	}

	if ( level === "debug" ){
		$("body").append("<p class='debug'><b>" + date + "</b>" + delimiter + message + "</p>");
	}
	else if ( level === "info" ){
		$("body").append("<p class='info'><b>" + date + "</b>" + delimiter + message + "</p>");
	}
	else if ( level === "success" ){
		$("body").append("<p class='success'><b>" + date + "</b>" + delimiter + message + "</p>");
	}
	else if ( level === "warn" ){
		$("body").append("<p class='warn'><b>" + date + "</b>" + delimiter + message + "</p>");
	}
	else if ( level === "error" ){
		$("body").append("<p class='error'><b>" + date + "</b>" + delimiter + message + "</p>");
	}
}
