import { Sprite, Texture } from "pixi.js";

export class image extends Sprite{
    constructor(texture:Texture){
        super(texture)

        

        this.anchor.set(0.5, 0.5)

    }
}