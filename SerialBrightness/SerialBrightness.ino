void setup() {
  Serial.begin(9600);
  Serial.setTimeout(10); // verringert Wartezeit auf 10ms
  pinMode(11, OUTPUT);

}

void loop() {
  if (Serial.available() > 0) {
    char input = Serial.parseInt();
    analogWrite(11, input);
   }

}
