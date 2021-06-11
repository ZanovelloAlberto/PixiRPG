import { Container, DisplayObject, Sprite } from "pixi.js";

import { Res } from "./Res";

export class TileMap extends Container {

    city = [0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0];

    map: Array<DisplayObject> = [];
    tileNumeber:number
    constructor(loader: Res,map :Array<number>) {
        super();
        this.tileNumeber = 4;
        

    }
    public parse(loader: Res,map :Array<number>){
        
    }
    public setTile(x:number,y:number,sprite:Sprite){
        this.map[x+y*this.tileNumeber] = sprite;
    }
}