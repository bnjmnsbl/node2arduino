#include <Servo.h>

Servo servoSchwarz;


void setup() {
  Serial.begin(9600);
  Serial.setTimeout(10); // verringert Wartezeit auf 10ms
  servoSchwarz.attach(11);

}

void loop() {
  servoSchwarz.write(20);
  Serial.write("-70");
  delay(4000);
  servoSchwarz.write(80);
  Serial.write("80");
  delay(4000);
  servoSchwarz.write(150);
  Serial.write("180");
  delay(4000);
}
