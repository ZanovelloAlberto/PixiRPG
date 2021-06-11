import { Application, SCALE_MODES, settings } from "pixi.js";

export class Pixi extends Application{
    constructor(){

        super()
        document.body.appendChild(this.view);
        this.configure();
        this.resizeTo = document.body;
        
        this.resize();

    }
    configure(){

        // Disable interpolation when scaling, will make texture be pixelated
        settings.SCALE_MODE = SCALE_MODES.NEAREST;
    }
}