import Button from "./Button.js";

export default class StartButton extends Button {
  constructor(x, y, text) {
    super(x, y, 150, 40, text);
    this.width = 300;
    this.height = 80;
    this.cornerRadius = 35;
  }
  displayButton() {
    fill(this.fillColor());
    rect(0, 0, this.width, this.height, this.cornerRadius);

    textSize(40);
    textFont("Voyager heavy");
    fill("white");
    textAlign(CENTER, CENTER);
    text(this.text, this.width / 2, this.height / 2 - 5);
  }
  fillColor() {
    if (this.hitTest() && mouseIsPressed) {
      return "#522d80";
    } else {
      return "#746cc0";
    }
  }
}
