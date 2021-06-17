import { Rectangle, Texture, Loader } from "pixi.js";


export class Res extends Loader {


    static tilesize:number = 16;
    static resource: any;
    static getChar(i: number): Array<Texture> {

        const r = new Array<Texture>();
        for (let i = 0; i < 16; i++) {
            r.push(new Texture(Res.resource.char.texture, new Rectangle((i % 3) * 16, Math.floor(i / 3) * 16, 16, 16)));
        }
        //console.log(r)
        return r;

    }
    static finished = () => { }

    constructor() {
        super();
        
        this.add('tile', 'img/basictiles.png');
        this.add('char', 'img/characters.png');
        this.load((loader, resources) => {
            Res.resource = resources;
            Res.finished();
        })
    }


    static getTile(x: number, y: number) : Texture{
        return new Texture(Res.resource.tile.texture, new Rectangle(x * 16, y * 16, 16, 16));
    }

    static getMap(n:number):any{

    }
    static getnTile(n: number) : Texture{
        return new Texture(Res.resource.tile.texture, new Rectangle(n%8 * 16, Math.floor(n/8 * 16), 16, 16));
    }

    static geti<T>(n:number,a :Array<T>,w:number){
        return a[n/w * w]
    }
}

// this.children.forEach((e)=>{
//     if('update' in e ){
//         const a = e as ViewObject
//         a.update()
//     }
// })