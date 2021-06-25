// import gsap from "./gsap.min.js";

export default class Screens {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.gameState = "Welcome";
    this.welcomeBackground = loadImage("Welcome-Screen.png");
    this.gameBackground = loadImage("Tamagotchi-GameScreen1.png");
    this.introBackground = loadImage("Galaxy.jpg");
    this.grootDead = loadImage("Groot-Dead.png");
    this.grootButton = {
      x: 30,
      y: 185,
      width: 210,
      height: 50,
      corner: 20,
      textFont: "Voyager Heavy",
      color: color("#746cc0"),
      strokeColor: color(255),
      strokeWeight: 1.2,
      text: "I am Groot",
    };
    this.clickAnimated = {
      x: 300,
      y: 470,
      width: 180,
      height: 40,
      textFont: "Voyager Heavy",
      color: color("black"),
      strokeColor: color(255),
      strokeWeight: 2.5,
      cornerRadius: 20,
      text: "click to continue",
    };
  }
  display() {
    push();

    translate(this.x, this.y);
    if (this.gameState === "Welcome") {
      this.welcomeScreen();
    }
    if (this.gameState === "Intro") {
      this.introScreen();
    }
    if (this.gameState === "Intro2") {
      this.introScreen2();
    }
    if (this.gameState === "Start") {
      this.startScreen();
      this.displayGrootButton();
    }
    if (this.gameState === "GameIsRunning") {
      this.gameScreen();
    }
    if (this.gameState === "GameOver") {
      this.endScreen();
    }

    pop();
  }
  //Screens
  welcomeScreen() {
    image(this.welcomeBackground, 0, 0, 600, 500);
    this.displayClickAnimated();
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

    //Hint for Player to click to continue
    fill(255);
    textSize(18);
    textFont("Lucida Console");
    //textFont("American Typewriter");
    textAlign(CENTER);
    text(">", 300, 400);
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

    //Hint for Player to click to continue
    fill(255);
    textSize(18);
    textFont("Lucida Console");
    //textFont("American Typewriter");
    textAlign(CENTER);
    text(">", 300, 400);
  }

  startScreen() {
    image(this.introBackground, 0, 0, 600, 500); //galaxy background
    fill(255);
    textFont("Lucida Console");
    textSize(27);
    textAlign(CENTER);
    text("Sounds good to you? Great!", this.x + 300, this.y + 90);
    fill("#ff007f");
    textSize(20);
    text("Let the baby sitting begin.", this.x + 300, this.y + 140);
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

  //display for animations
  displayClickAnimated() {
    //Button
    rectMode(CENTER);
    textFont(this.clickAnimated.textFont);

    //Fill(messageButton.color);
    stroke(this.clickAnimated.strokeColor);
    strokeWeight(this.clickAnimated.strokeWeight);
    noFill();
    rect(
      this.clickAnimated.x,
      this.clickAnimated.y,
      this.clickAnimated.width,
      this.clickAnimated.height,
      this.clickAnimated.cornerRadius
    );

    fill(this.clickAnimated.color);
    textAlign(CENTER, CENTER);
    text(this.clickAnimated.text, this.clickAnimated.x, this.clickAnimated.y);
  }
  displayGrootButton() {
    //Button
    textFont(this.grootButton.textFont);
    //fill(this.grootButton.color);
    noFill();
    stroke(this.grootButton.strokeColor);
    strokeWeight(this.grootButton.strokeWeight);
    rect(
      this.grootButton.x,
      this.grootButton.y,
      this.grootButton.width,
      this.grootButton.height,
      this.grootButton.corner
    );

    // noFill();
    fill(this.grootButton.color);
    textAlign(CENTER, CENTER);
    text(
      this.grootButton.text,
      this.grootButton.x + this.grootButton.width / 2,
      this.grootButton.y + this.grootButton.height / 2
    );
  }

  //Animations
  animationClick() {
    gsap.to(this.clickAnimated, {
      duration: 3,
      delay: 0.5,
      ease: "easeIn",
      x: 300,
      y: 435,
      textFont: "Voyager Heavy",
      color: color("#white"),
      //#746cc0
      strokeColor: color("black"),
      strokeWeight: 3,
      repeat: -1,
      yoyo: true,
    });
  }

  firstAnimationMessage() {
    gsap.to(this.grootButton, {
      duration: 3,
      delay: 0.5,
      ease: "easeIn",

      x: 300,
      y: 290,
      width: 210,
      textFont: "Voyager Heavy",
      text: "I am Groot",
    });
  }
  secondAnimationMessage() {
    gsap.to(this.grootButton, {
      duration: 3,
      delay: 4,
      ease: "sine",

      x: 50,
      y: 240,
      width: 240,
      textFont: "Voyager Heavy",

      color: color("#white"),
      strokeColor: color("#746cc0"),
      strokeWeight: 1.8,
      text: "We are Groot",
      repeat: -1,
      yoyo: true,
    });
  }
}
