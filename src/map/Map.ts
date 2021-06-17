/*
    Raccoglitore di tutti gli aspetti legati al movimento dello schermo quando si muove il personaggio
    
*/
import { Container, DisplayObject, Sprite } from "pixi.js";
import { Pixi } from "../Pixi";

import { Res } from "../Res";
import { NetPlayer } from "./NetPlayer";
import { Player } from "./Player";



export class Map extends Container {



    player : Player;

    //net:NetPlayer

    


    constructor() {
        super();
        this.player = new Player(Res.getChar(0));
        //this.net = new NetPlayer(this.player)
        this.x = 0
        this.y = 0
        this.addChild(this.player);



        
        
    }
    update = ()=>{
        
        this.player.update();
        this.x = -this.player.x + Pixi.width/2
        this.y = -this.player.y + Pixi.width/2
        //console.log('cotainer', this.x,this.y)
    }

}