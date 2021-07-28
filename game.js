import Pet from "./Pet.js";
import ParameterButton from "./ParameterButton.js";
import ActionButton from "./ActionButton.js";
import StartButton from "./StartButton.js";
// import gsap from "./gsap.min.js";
import Screens from "./Screens.js";

//Instanzieren von Objekten
let createPet = new Pet(80, 90, 1234 / 5, 1794 / 5);
let createParameterHunger = new ParameterButton(45, 60, "Hunger");
let createParameterSleepiness = new ParameterButton(225, 60, "Sleepiness");
let createParameterBoredom = new ParameterButton(405, 60, "Boredom");

//Start Button
let StartGameButton = new StartButton(150, 370, "START");
//Action Buttons
let ActionFeed = new ActionButton(350, 200, "Feed Groot");
let ActionSleep = new ActionButton(350, 260, "Bring Groot to bed");
let ActionMusic = new ActionButton(350, 320, "Play with Groot");

//Create Screens
let createScreens = new Screens(0, 0, "Start");

// Welcome Screen Animation
function welcomeAnimation() {
  createScreens.firstAnimationMessage();
  createScreens.secondAnimationMessage();
}

//Click to continue Animation
createScreens.animationClick();

function GameScreen() {
  console.log(createScreens.gameState);

  //Create Screen
  createScreens.display();

  if (createScreens.gameState === "GameIsRunning") {
    //Create Parameters
    createParameterHunger.display();
    createParameterSleepiness.display();
    createParameterBoredom.display();

    //Create User Interaction through Action Buttons
    ActionFeed.display();
    ActionMusic.display();
    ActionSleep.display();

    //Create Groot
    createPet.display();
  }

  if (createParameterHunger.valueWidth === 0) {
    createParameterHunger.game = false;
  } else if (createParameterSleepiness.valueWidth === 0) {
    createParameterSleepiness.game = false;
  } else if (createParameterBoredom.valueWidth === 0) {
    createParameterBoredom.game = false;
  }

  //set gameState on "GameOver"
  if (
    createParameterHunger.valueWidth === 0 &&
    createParameterSleepiness.valueWidth === 0 &&
    createParameterBoredom.valueWidth === 0
  ) {
    createScreens.gameState = "GameOver";
  }

  //show start button when start screen is on
  if (createScreens.gameState === "Start") {
    StartGameButton.display();
  }
}

function changeEmotion() {
  //show happy groot if parameters are >120 && <=150
  if (
    createParameterHunger.valueWidth > 120 &&
    createParameterHunger.valueWidth <= 150 &&
    createParameterSleepiness.valueWidth > 120 &&
    createParameterSleepiness.valueWidth <= 150 &&
    createParameterBoredom.valueWidth > 120 &&
    createParameterBoredom.valueWidth <= 150
  ) {
    createPet.moodSwitch = "Happy";
  } //show sad groot if parameters are >0 && <=45
  else if (
    createParameterHunger.valueWidth > 1 &&
    createParameterHunger.valueWidth <= 45 &&
    createParameterSleepiness.valueWidth > 1 &&
    createParameterSleepiness.valueWidth <= 45 &&
    createParameterBoredom.valueWidth > 1 &&
    createParameterBoredom.valueWidth <= 45
  ) {
    createPet.moodSwitch = "Sad";
  }
  //show sad groot if at least two parameters are >0 && <=45
  else if (
    (createParameterHunger.valueWidth > 1 &&
      createParameterHunger.valueWidth <= 45 &&
      createParameterSleepiness.valueWidth > 1 &&
      createParameterSleepiness.valueWidth <= 45) ||
    (createParameterHunger.valueWidth > 1 &&
      createParameterHunger.valueWidth <= 45 &&
      createParameterBoredom.valueWidth > 1 &&
      createParameterBoredom.valueWidth <= 45) ||
    (createParameterSleepiness.valueWidth > 1 &&
      createParameterSleepiness.valueWidth <= 45 &&
      createParameterBoredom.valueWidth > 1 &&
      createParameterBoredom.valueWidth <= 45)
  ) {
    createPet.moodSwitch = "Sad";
  } //show normal Groot
  else if (
    createParameterHunger.valueWidth > 45 &&
    createParameterHunger.valueWidth <= 120 &&
    createParameterSleepiness.valueWidth > 45 &&
    createParameterSleepiness.valueWidth <= 120 &&
    createParameterBoredom.valueWidth > 45 &&
    createParameterBoredom.valueWidth <= 120
  ) {
    createPet.moodSwitch = "Normal";
  }
}

function mouseClicked() {
  //Changing parameter value

  //Action Buttons work if parameter value is greater than 0
  // Action click on Feed Button
  if (
    ActionFeed.hitTest() &&
    createParameterHunger.valueWidth > 0 &&
    createParameterHunger.valueWidth <= 140
  ) {
    createParameterHunger.valueWidth += 10;

    console.log("Feed Groot" + " " + createPet.hunger);
  } // Action click on Play Button
  else if (
    ActionMusic.hitTest() &&
    createParameterBoredom.valueWidth > 0 &&
    createParameterBoredom.valueWidth <= 140
  ) {
    createParameterBoredom.valueWidth += 10;
    console.log("Turn on music" + " " + createPet.boredom);
  } // Action click on Sleep Button
  else if (
    ActionSleep.hitTest() &&
    createParameterSleepiness.valueWidth > 0 &&
    createParameterSleepiness.valueWidth <= 140
  ) {
    createParameterSleepiness.valueWidth += 10;
    console.log("Bring groot to bed" + " " + createPet.sleepiness);
  }
  if (createScreens.gameState === "Welcome") {
    createScreens.gameState = "Intro";
  } else if (createScreens.gameState === "Intro") {
    createScreens.gameState = "Intro2";
    console.log("Screen Wechsel");

    clear();
  } else if (createScreens.gameState === "Intro2") {
    createScreens.gameState = "Start";
    welcomeAnimation();
    console.log("Last Intro Screen");
  }
  //RESET ALL VARIALBLES TO START
  else if (createScreens.gameState === "Start" && StartGameButton.hitTest()) {
    createScreens.gameState = "GameIsRunning";
    console.log("Let's start this journey");
    createParameterHunger.game = true;
    createParameterSleepiness.game = true;
    createParameterBoredom.game = true;
    createPet.moodSwitch = "Happy";

    clear();
  } else if (createScreens.gameState === "GameIsRunning") {
    //if parameter values reach all 0, groot dies and End Screen appears
    console.log("Care for Groot");
    clear();
  } else if (createScreens.gameState === "GameOver") {
    createScreens.gameState = "Start";

    createParameterHunger.valueWidth = 150;
    createParameterSleepiness.valueWidth = 150;
    createParameterBoredom.valueWidth = 150;

    console.log("Time to try again");
    clear();
  }
}

function draw() {
  GameScreen();
  changeEmotion();

  //console.log(createScreens.gameState);
  // console.log(createPet.myCounter);
}
window.draw = draw;
window.mouseClicked = mouseClicked;
