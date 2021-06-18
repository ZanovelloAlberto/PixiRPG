import { Text, Container, TextStyle } from "pixi.js";
import { stdin } from "process";

export class Loading {


    constructor(parent: Container) {

        const style = new TextStyle();
        style.align = "center"
        style.fill = 0xffffff
        let text = new Text('Loading',style)

        
        parent.addChild(text)
        

    }

}