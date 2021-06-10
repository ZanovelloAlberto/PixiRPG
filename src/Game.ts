import { Loader, Texture } from "pixi.js";
import { Pixi } from "./Pixi";
import { Player } from "./Player";
import { Res } from "./Res";


export class Game{

    //gameLoop : number;
    player : Player;
    pixi : Pixi;
 
    constructor(loader:Res){
        
        this.pixi = new Pixi();
        this.player = new Player(loader.getChar(0));
        
        setInterval(this.update,1000/30);
    }
    update(){

    }

}