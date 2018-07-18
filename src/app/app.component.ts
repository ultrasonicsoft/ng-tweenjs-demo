import { Component } from '@angular/core';

declare var createjs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    createjs.Tween.get(circle, { loop: true })
      .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
      .to({ alpha: 0, y: 75 }, 500, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0, y: 125 }, 100)
      .to({ alpha: 1, y: 100 }, 500, createjs.Ease.getPowInOut(2))
      .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }
}
