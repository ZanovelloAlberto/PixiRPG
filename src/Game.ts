import { Container, DisplayObject, Loader, Texture } from "pixi.js";
import { NetPlayer } from "./NetPlayer";
import { Player } from "./Player";
import { Res } from "./Res";


export class Game extends Container{
    
    object : Array<DisplayObject> = [];
    fps : number = 20;
    player : Player;
    net:NetPlayer
    
    
    constructor(){
        super();
        

        //this.object[0].
        
        this.player = new Player(Res.getChar(0));
        this.net = new NetPlayer(this.player)

        this.addChild(this.player,this.net);



        setInterval(this.update,1000/this.fps);
    }

    update = ()=>{
        this.player.update();
    }

}