var SerialPort = require('serialport');
var portName = "/dev/tty.usbmodem1411";
var myPort = new SerialPort(portName, 9600);

var Readline = SerialPort.parsers.Readline;
var parser = new Readline();
myPort.pipe(parser);

myPort.on('open', openPort);

parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function openPort() {
	

	console.log("Port open");

	function sendData() {
		
		var drink = Math.floor((Math.random() * 6));
		myPort.write(drink.toString());
		console.log("Sending " + drink)

	}
	setInterval(sendData, 20000);
}

function readSerialData(data) {
	console.log(data);
}

function showPortClose() {
	console.log('port closed');
}

function showError(error) {
	console.log('SerialPort error ' + error);
}

