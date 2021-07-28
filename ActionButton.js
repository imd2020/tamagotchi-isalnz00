import Button from "./Button.js";

export default class ActionButton extends Button {
  constructor(x, y, text) {
    super(x, y, 150, 40, text);
    this.cornerRadius = 20;
    this.width = 170;
  }
  displayButton() {
    fill(this.fillColor());
    rect(0, 0, this.width, this.height, this.cornerRadius);

    textSize(14);
    fill("black");
    textAlign(CENTER, CENTER);
    text(this.text, this.width / 2, this.height / 2);
  }
  fillColor() {
    if (this.hitTest() && mouseIsPressed) {
      return "gray";
    } else {
      return "white";
    }
  }
}
