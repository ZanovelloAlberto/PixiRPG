import {filters,Texture, FilterState, Sprite, Text, TextStyle } from "pixi.js";
import { textSpanIntersectsWithPosition } from "typescript";
import { Player } from "../game/map/Player";
import { Pixi } from "../Pixi";
import { Res } from "../Res";



export class LoginBtn extends Text{
    constructor(x:number,y:number,l:number,text:string,mouseDown: (event: any)=>void){
        super("PLAY",{
            fontFamily: "\"Lucida Console\", Monaco, monospace"
        })
        
        this.x = x* (Pixi.width/10)
        this.y = y*(Pixi.height/10)
        //this.roundPixels = true
        this.resolution = 100
        this.anchor.set(0.5,0.5)
        this.interactive = true;
        this.tint = 0xeb7434

        this.on('mousedown',mouseDown)
        this.on('pointerover',()=>{
            this.text = "PLAY!"
        })
        this.on('pointerout',()=>{
            this.text = "PLAY"
        })
        
        
    }

    
}