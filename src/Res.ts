import { Rectangle, Texture, Loader } from "pixi.js";
import { MainMenu } from "./mainMenu/MainMenu";


export class Res extends Loader {


    static tilesize:number = 16;
    static resource: any;
    static getChar(c: number): Array<Texture> {
        const vy = Math.floor(c / 4)*16*4
        const vx = (c%4)*48

        const r = new Array<Texture>();
        for (let i = 0; i < 12; i++) {
            r.push(new Texture(Res.resource.char.texture, new Rectangle(vx+(i % 3) * 16,vy + (Math.floor(i / 3) * 16), 16, 16)));
        }
        // console.log(Math.floor(c / 4)*16*4)
        return r;

    }
    

    constructor() {
        super();
        
        this.add('tile', 'res/img/basictiles.png')
        this.add('char', 'res/img/characters.png')
        this.add('sqare', 'res/maps/sqare.json')
        this.load((loader, resources) => {
            Res.resource = resources;
            setTimeout(MainMenu.start,2000)
            
        })
    }


    static getTile(x: number, y: number) : Texture{
        return new Texture(Res.resource.tile.texture, new Rectangle(x * 16, y * 16, 16, 16));
    }

    static getMap(n:string):ObjMap{
        return (Res.resource.sqare.data)
    }
    static getnTile(n: number) : Texture{
        return this.getTile(n%8,Math.floor(n/8))
    }

    static gi<T>(n:number,a :Array<T>,w:number){
        return a[n/w * w]
    }
}
export type ObjMap = {
    
    value:[],
    background:[],
    walk:[],

    height:number,
    width:number,
}

// this.children.forEach((e)=>{
//     if('update' in e ){
//         const a = e as ViewObject
//         a.update()
//     }
// })