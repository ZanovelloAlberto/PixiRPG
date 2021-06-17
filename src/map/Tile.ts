import { AnimatedSprite, DisplayObject, Graphics, ObservablePoint, Renderer, Sprite, Texture } from "pixi.js";
import { Res } from "../Res";


export class Tile extends Sprite
{
    walk:Boolean
    value:Texture
    constructor(value?:number, walk?:number, back?:number){
        if(!back){
            back = 0
        }
        if(!walk){
            walk = 0
        }
        if(!value){
            value = 120
        }

        super(Res.getnTile(back));
        
        this.value = Res.getnTile(value)
        this.walk = walk == 0    

        
        
    }
    
    
}