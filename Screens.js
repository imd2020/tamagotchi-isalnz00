export default class Screens {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.gameState = "Intro";
    this.gameBackground = loadImage("Tamagotchi-GameScreen1.png");
    this.introBackground = loadImage("Galaxy.jpg");
    this.grootDead = loadImage("Groot-Dead.png");
  }
  display() {
    push();

    translate(this.x, this.y);
    if (this.gameState === "Intro") {
      this.introScreen();
    }
    if (this.gameState === "Intro2") {
      this.introScreen2();
    }
    if (this.gameState === "Start") {
      this.startScreen();
    }
    if (this.gameState === "GameIsRunning") {
      this.gameScreen();
    }
    if (this.gameState === "GameOver") {
      this.endScreen();
    }

    // console.log("Test");

    pop();
  }
  introScreen() {
    //background(125, 100, 140);
    image(this.introBackground, 0, 0, 600, 500);

    //transparent textbox
    push();
    fill(30, 30, 30, 200);
    noStroke();
    rect(this.x + 30, this.y + 50, 540, 400);
    pop();

    //Intro Story Text
    fill(255);
    textSize(14);
    textFont("Lucida Console");
    //textFont("American Typewriter");
    textAlign(CENTER);
    //text("Intro/Story Screen Text", this.x + 380, this.y + 140);
    text(
      "Two days ago, the Guardians of the Galaxy",
      this.x + 300,
      this.y + 160
    );
    text(
      "collided with a meteor when they were headed ",
      this.x + 300,
      this.y + 200
    );

    text(
      "towards planet Earth to pick up Baby Groot. ",
      this.x + 300,
      this.y + 240
    );
    text(
      "Luckily, they did not suffer any losses except ",
      this.x + 300,
      this.y + 280
    );
    text(
      "that their spaceship was severely damaged. ",
      this.x + 300,
      this.y + 320
    );
  }
  introScreen2() {
    image(this.introBackground, 0, 0, 600, 500);

    //transparent textbox
    push();
    fill(30, 30, 30, 200);
    noStroke();
    rect(this.x + 30, this.y + 50, 540, 400);
    pop();

    //Intro Story Text
    fill(255);
    textSize(14);
    textFont("Lucida Console");
    //textFont("American Typewriter");
    textAlign(CENTER);
    //text("Intro/Story Screen Text", this.x + 380, this.y + 180);
    text("Due to the reparations taking place, ", this.x + 300, this.y + 160);
    text(
      "the Guardians won’t make it in time to pick up Groot.",
      this.x + 300,
      this.y + 200
    );
    text("Now here’s the problem.", this.x + 300, this.y + 240);
    push();
    //fill("#df73ff");
    //fill("#7df9ff"); //light turquoise
    //fill("#00ccff");
    fill("#ff007f");
    // fill("#fc5a8d");
    text(
      "Baby Groot needs someone to look after him",
      this.x + 300,
      this.y + 280
    );
    pop();
    text(
      " until the Guardians come to pick him up.",
      this.x + 300,
      this.y + 320
    );
  }

  startScreen() {
    //background(125, 100, 140); //lila
    image(this.introBackground, 0, 0, 600, 500); //galaxy background
    fill(255);
    textFont("Lucida Console");
    textSize(27);
    textAlign(CENTER);
    text("Sounds good to you? Great!", this.x + 300, this.y + 90);
    //fill("#9f00ff"); lila
    //fill(149, 0, 245); Lighter Purple

    // fill("#00ccff");
    // strokeWeight(1.5);
    // stroke("#fc6c85");
    //fill("#fc6c85");
    fill("#ff007f");
    textSize(20);
    text("Let the baby sitting begin.", this.x + 300, this.y + 140);
    //text("Start Screen", this.x + 380, this.y + 50);
  }

  gameScreen() {
    image(this.gameBackground, 0, 0, 600, 500);
    fill(55, 100, 200);
    textSize(35);
    textAlign(CENTER);
    //text("Game Screen is on", this.x + 380, this.y + 50);
  }

  endScreen() {
    background("#f6eabe");

    image(this.gameBackground, 0, 0, 600, 500);
    fill(255);
    textSize(17);
    textFont("Lucida Console");
    textAlign(CENTER);
    text("<Click to restart>", this.x + 420, this.y + 380);
    image(this.grootDead, 150, 90, 1234 / 5, 1794 / 5);
  }
}
