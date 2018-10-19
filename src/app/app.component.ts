import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayPass = true;
  buttonClick = [];

  passwordButton() {
    this.displayPass = !this.displayPass;
    this.buttonClick.push(this.buttonClick.length + 1);
  }
}
