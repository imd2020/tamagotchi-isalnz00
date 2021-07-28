import Button from "./Button.js";

export default class ParameterButton extends Button {
  constructor(x, y, text) {
    super(x, y, 150, 35, text);
    this.valueWidth = 150;
    this.game = true;
  }
  displayButton() {
    //makes visible how parameter values are decreasing
    this.coloredButton();
    strokeWeight(2);
    stroke(76, 198, 227);
    fill(76, 198, 227, 40);
    rect(0, 0, this.width, this.height);

    //Text
    noStroke();
    textSize(20);
    strokeWeight(2);
    stroke("black");
    //fill("#ff6666");
    fill("white");
    textAlign(CENTER, CENTER);
    text(this.text, this.width / 2, this.height / 2);
  }
  coloredButton() {
    //shows parameter value
    push();
    noStroke();
    fill("#fc6c85");
    rect(0, 0, this.update(), this.height);
    pop();
  }
  update() {
    if (this.game === true && this.valueWidth > 0) {
      return (this.valueWidth = this.valueWidth - 0.25);
    } else if (this.game === false) {
      return this.valueWidth;
    }
  }
}
