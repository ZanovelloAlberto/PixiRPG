import { Socket } from "net";
import { Container, Sprite } from "pixi.js";
import { Player } from   './Player'
import { Res } from "./Res";
export class NetPlayer extends Container{

    player:Player;
    socket:Socket;

    constructor(p:Player){
        super();
        this.player = p;
        this.socket = new Socket();
        this.socket.connect(4000,"localhost");
        this.socket.on("data",(data)=>{
            this.parse(data)
        })
        //WebSocket.
       
    }


    update = ()=>{
        this.socket._write(getUser(this.player),"utf-8",()=> {});
    }


    parse = (data: any)=>{
        const a = JSON.parse(data);
        this.removeChildren();
        a.forEach((element: any) => {
            this.addChild(new Person(element));
        });

    }
}
function getUser(p : Player){

    return JSON.stringify({
        image:p.state + p.direction*3,
        skin:0,
        x:p.x,
        y:p.y
    });
    
}
class Person extends Sprite{

    constructor(data:any){
        super();
        this.x = data.x;
        this.y = data.y;
        this.texture = Res.getChar(data.skin)[data.image];
        
    }
    
}