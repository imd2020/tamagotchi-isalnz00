export default class Pet {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    //Counter
    this.myCounter = 0;

    this.moodSwitch = "Happy";
    //little Groot
    this.grootLittle = loadImage("Groot-Normal-Klein.png");
    this.grootLittleHappy = loadImage("Groot-Happy-Klein.png");
    this.grootLittleSad = loadImage("Groot-Sad-Klein.png");
    //bigger Groot
    this.groot = loadImage("Groot-Normal-colors.png");
    this.grootHappy = loadImage("Groot-Happy-colors.png");
    this.grootSad = loadImage("Groot-Sad-colors.png");
  }
  display() {
    push();
    if (this.myCounter >= 60) {
      this.myCounter = 0;
    }
    this.myCounter += 1 / 30;
    translate(this.x, this.y);
    this.displayBody();
    pop();
  }

  displayBody() {
    //Mood changes
    if (this.moodSwitch === "Normal") {
      this.displayNormalMood();
    } else if (this.moodSwitch === "Sad") {
      this.displaySadMood();
    } else if (this.moodSwitch === "Happy") {
      this.displayHappyMood();
    }
  }
  displayNormalMood() {
    //insert Normal Groot png
    if (this.myCounter <= 25) {
      image(this.grootLittle, 0, 0, 1233 / 5, 1681 / 5);
    } else {
      image(this.groot, 0, 0, this.width, this.height);
    }
  }

  displayHappyMood() {
    //insert Happy Groot png
    if (this.myCounter <= 25) {
      image(this.grootLittleHappy, 0, 0, 1233 / 5, 1681 / 5);
    } else {
      image(this.grootHappy, 0, 0, this.width, this.height);
    }
  }
  displaySadMood() {
    //insert Sad Groot png
    if (this.myCounter <= 25) {
      image(this.grootLittleSad, 0, 0, 1233 / 5, 1681 / 5);
    } else {
      image(this.grootSad, 0, 0, this.width, this.height);
    }
  }
}
