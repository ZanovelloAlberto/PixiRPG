import { Text, Container, TextStyle } from "pixi.js";
import { stdin } from "process";
import { pixi } from "./Main";
import { Pixi } from "./Pixi";

export class Loading {


    constructor(parent: Container) {

        const style = new TextStyle();
        style.align = "center"
        style.fill = 0xffffff
        let text = new Text('Loading',style)

        text.anchor.set(0.5,0.5)
        text.x = Pixi.width/2
        text.y = Pixi.height/2

        parent.addChild(text)
        

    }

}