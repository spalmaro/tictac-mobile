import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as PIXI from "pixi.js";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("pixi", { static: true })
  public pixiContainer: ElementRef;
  private pixi: PIXI.Application;

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    this.pixi = new PIXI.Application({
      width: 640,
      height: 480,
      backgroundColor: 0x112266
    });
    const aspectRatio = this.pixi.renderer.height / this.pixi.renderer.width;

    // new PIXI

    this.pixi.view.style.width = "100%";
    this.pixi.view.style.height = `${aspectRatio * 100}%`;
    this.pixiContainer.nativeElement.appendChild(this.pixi.view);

    console.log(this.pixi);
  }
}
