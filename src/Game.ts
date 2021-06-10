import { DisplayObject, Loader, Texture } from "pixi.js";
import { ObjectFlags } from "typescript";
import { Pixi } from "./Pixi";
import { Player } from "./Player";
import { Res } from "./Res";


export class Game{
    
    object : Array<DisplayObject> = [];
    fps : number = 20;
    player : Player;
    pixi : Pixi;
 
    constructor(loader:Res,pixi:Pixi){
        
        this.pixi = pixi;
        this.pixi.stage.removeChildren();
        

        //this.object[0].
        
        this.player = new Player(loader.getChar(0));
        this.player.height = 100;
        this.player.width = 100;

        pixi.stage.addChild(this.player);
        
        setInterval(this.update,1000/this.fps);
    }

    update = ()=>{
        this.player.update();
    }

}