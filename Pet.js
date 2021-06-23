export default class Pet {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    // this.name = name;
    // this.hunger = hunger;
    // this.sleepiness = sleepiness;
    // this.boredom = boredom;
    this.moodSwitch = "Happy";
    this.groot = loadImage("Groot-Normal-colors.png");
    this.grootHappy = loadImage("Groot-Happy-colors.png");
    this.grootSad = loadImage("Groot-Sad-colors.png");
  }
  display() {
    push();
    translate(this.x, this.y);
    this.displayBody();
    pop();
  }

  displayBody() {
    //Mood changes
    if (this.moodSwitch === "Normal") {
      // console.log("Normal happy groot");
      this.displayNormalMood();
    } else if (this.moodSwitch === "Sad") {
      this.displaySadMood();
    } else if (this.moodSwitch === "Happy") {
      this.displayHappyMood();
    }
  }
  displayNormalMood() {
    //insert Normal Groot png
    image(this.groot, 0, 0, this.width, this.height);
  }

  displayHappyMood() {
    //insert Happy Groot png
    image(this.grootHappy, 0, 0, this.width, this.height);
  }
  displaySadMood() {
    //insert Sad Groot png
    image(this.grootSad, 0, 0, this.width, this.height);
  }
}
