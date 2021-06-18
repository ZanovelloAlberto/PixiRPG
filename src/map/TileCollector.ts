import { ArrayResource, Container } from "pixi.js"
import { Tile } from "./Tile"
import { ObjMap, Res } from "../Res"

export class TileCollector extends Container{
    
    nh: number;
    nw: number; // CELL NUMBER 

    tiles:Array<Tile> = []
    
    constructor(nameMap: string){
        super()
        var map:ObjMap = Res.getMap(nameMap)
        
        this.nh = map.height
        this.nw = map.width

        //console.log(this.nh,this.nw)
        //console.log(map)
        // const Ival = map.value.values()
        // const Ibac = map.back.values()
        // const Iwal = map.walk.values()
        


        for (let y = 0; y < this.nh; y++) {
            for (let x = 0; x < this.nw; x++) {
                
                // const v = Ival.next().value
                // const w = Iwal.next().value
                // const b = Ibac.next().value
                const v = map.value[x+y*this.nw]
                const w = map.walk[x+y*this.nw]
                const b = map.background[x+y*this.nw]
                
                const tile = new Tile(x,y,v,w,b)
                
                this.tiles.push(tile)
                this.addChild(tile)
            }        
        }
        
         
    }

    public setTile(x: number, y: number,tile:Tile) {
        this.tiles[x + y * this.nw] = tile
    }



    public getTile(x: number, y: number):Tile {
        return this.tiles[x + y * this.nw]
    }

    
}
