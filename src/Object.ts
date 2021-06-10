import { Sprite, Texture } from "pixi.js";

export class Object{

    sprite:Sprite;
    constructor(image:Texture){  
        this.sprite = new Sprite(image);

        
    }
}