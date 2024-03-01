#include <Servo.h>
Servo miServo;

void setup() {
  Serial.begin(9600);
  miServo.attach(9);
}

void loop() {
  if(Serial.available() > 0){
    int angulo = Serial.parseInt();
    miServo.write(angulo);
  }
}
