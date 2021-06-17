import { Application, Rectangle, SCALE_MODES, settings } from "pixi.js";

export class Pixi extends Application{

    constructor(){

        super({
            height:200,
            width:200,
            

        })
        document.body.appendChild(this.view);




    }
    static height : number = 200
    static width : number = 200


}