import { Rectangle, Texture, Loader } from "pixi.js";
import { Game } from "./Game";
import { Main } from "./Main";

export class Res extends Loader{
    
    
    resource : any;
    getChar(i: number): Array<Texture> {

        const r = new Array<Texture>();
        for (let i = 0; i < 16; i++) {
            r.push(new Texture(this.resource.char.texture, new Rectangle((i % 3) * 16, Math.floor(i / 3) * 16, 16, 16)));
        }
        return r;
        
    }
    
    constructor(){
        super();
        this.add('tile','res/img/basictiles.png');
        this.add('char','res/img/characters.png');

        this.load((loader, resources) => {
            this.resource = resources;
            // resources is an object where the key is the name of the resource loaded and the value is the resource object.
            // They have a couple default properties:
            // - `url`: The URL that the resource was loaded from
            // - `error`: The error that happened when trying to load (if any)
            // - `data`: The raw data that was loaded
            // also may contain other properties based on the middleware that runs.
            
        });
    }


    getTile(x:number, y:number){
        return new Texture(this.resource.char.texture,new Rectangle(x*16,y*16,16,16));
    }
}