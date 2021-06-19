/*
    Tutto cio che è contenuto nella classe game è conivolto dalla ridimensione della finestra
*/



import { Container, DisplayObject, Sprite } from "pixi.js";
import { pixi } from "../Main";

import { Map } from "./map/Map";
import { Player } from "./map/Player";
import { Pixi } from "../Pixi";
import { Res } from "../Res";


export class Game extends Container {


    fps: number = 20;
    map: Map;



    constructor() {
        super();
        this.map = new Map();

        //this.object[0]
        this.addChild(this.map)






        setInterval(this.update, 1000 / this.fps);
    }
    update = () => {
        this.map.update();

    }
    static start = ():Game=>{
        pixi.stage.removeChildren(0);
        const game = new Game();
        pixi.stage.addChild(game);
        return game;
    }
}           
    



