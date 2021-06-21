/*
    Raccoglitore di tutti gli aspetti legati al movimento dello schermo quando si muove il personaggio
    
*/
import { Container, DisplayObject, Sprite, TilingSprite } from "pixi.js";
import { Pixi } from "../../Pixi";

import { NetPlayer } from './NetPlayer'
import { Res } from "../../Res";
import { TileCollector } from "./TileCollector";
import { Player } from "./Player";
import { Tile } from "./Tile";



export class Map extends Container {



    static player : Player;
    static tiles : TileCollector
    static net:NetPlayer

    
    
    constructor() {
        super();
        
        
        Map.tiles = new TileCollector("sqare");
        this.addChild(Map.tiles)

        Map.player = new Player();
        this.addChild(Map.player);
        Map.net = new NetPlayer(Map.player)
        this.addChild(Map.net)
        this.x = -Map.player.x + Pixi.width/2
        this.y = -Map.player.y + Pixi.width/2

 


        
        
    }

    update = ()=>{
        
        Map.player.update();

        //console.log(Map.tiles.getTile(1,10).nvalue)
        
        this.x = -Map.player.x + Pixi.width/2
        this.y = -Map.player.y + Pixi.width/2
        if(Map.net){
            Map.net.update()
        }
        
        //console.log('cotainer', this.x,this.y)
    }

}