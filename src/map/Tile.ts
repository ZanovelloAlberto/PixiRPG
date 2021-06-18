import { AnimatedSprite, DisplayObject, Graphics, ObservablePoint, Renderer, Sprite, Texture } from "pixi.js";
import { Res } from "../Res";


export class Tile extends Sprite {
    walk: Boolean
    value: Texture
    nvalue:number
    constructor(x: number, y: number,value:number, walk?: number, back?: number ) {
        if (!back) {
            back = 0
        }
        if (!walk) {
            walk = 0
        }
        if (value == 0) {
            value = 112
        }

        super(Res.getnTile(back));
        this.nvalue = value;
        this.x = 16 * x
        this.y = 16 * y

        this.value = Res.getnTile(value)
        this.walk = walk == 0
        this.addChild(new Sprite(this.value))


    }
}