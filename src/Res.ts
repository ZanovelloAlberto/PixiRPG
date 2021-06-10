import { Rectangle, Texture, Loader } from "pixi.js";


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
        this.add('tile','img/basictiles.png');
        this.add('char','img/characters.png');
    }


    getTile(x:number, y:number){
        return new Texture(this.resource.char.texture,new Rectangle(x*16,y*16,16,16));
    }
}