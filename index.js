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
	var brightness = 0;
	console.log("Port open");
	//console.log("baud rate: " + myPort.options.baudRate);

	function sendData() {
		myPort.write(brightness.toString());
		console.log("Sending " + brightness);

		if (brightness < 255) {
			brightness += 10;
		} else {
			brightness = 0;
		}
	}
	setInterval(sendData, 500);
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

