import { Container } from "pixi.js"
import { Tile } from "./Tile"
import { Res } from "../Res"

export class TileCollector extends Container{
    
    nh: number;
    nw: number; // CELL NUMBER 

    tiles:Array<Tile> = []
    walkable:Array<Boolean> = []
    background
    constructor(n:number){
        super()
        var map = Res.getMap(n)
        map = { height:2, width:2,value:[0,0,0,0]}
        this.nh = map.height
        this.nw = map.width
        map.value.forEach(element => {
            this.tiles.push()
        });
        for (let x = 0; x < this.nw; x++) {
            for (let y = 0; y < this.nh; y++) {
                
                const tile = new Tile()
                tile.x = 16 * x;
                //map.value[]
            }        
        }
        this.tiles.forEach((e)=>{
            this.addChild(e)
        })
        
         
    }

    public setTile(x: number, y: number,tile:Tile) {
        this.tiles[x + y * this.nw] = tile
    }


    public getTile(x: number, y: number):Tile {
        return this.tiles[x + y * this.nw]
    }

    
}