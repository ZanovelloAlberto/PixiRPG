/*  PROPOSITI
    Forinire il nome del player appena entrato garantendo ad ogni client un aggiornamento del numero di utenti connessi
    Segnalare gli utenti connessi
    Segnalare gli utenti disconnessi
    Aggiornare fornendo la posizione successiva, basandosi sulla posizione precedente calcolare l animazione


*/

import { Container, Sprite } from "pixi.js";
import { Player } from './Player'
import { Res } from "../Res";
export class NetPlayer extends Container {

    player: Player;
    socket: WebSocket;
    person:Person;



    constructor(p: Player) {
        super();
        this.player = p;
        this.socket = new WebSocket("ws://79.54.246.112:4000");
        this.socket.onmessage = (event: any) => {
            this.parse(event.data)
        };
        this.person = new Person({x:477,y:455,image:0,skin:0})
        

    }


    update = () => {
        if(this.socket.readyState == WebSocket.OPEN ){
            const a = getUser(this.player)
            this.socket.send(a);
        }

 
    }


    parse = (data: any) => {

        const a = JSON.parse(data);
        this.removeChildren();
        this.addChild(this.person)
        this.addChild(new Sprite(Res.getTile(2,2)))
        a.forEach((element: any) => {

            this.addChild(new Person(JSON.parse(element)));
        });

    }
}
function getUser(p: Player) {

    return JSON.stringify({
        image: p.state + p.direction * 3,
        skin: 0,
        x: p.x,
        y: p.y
    });

}

class Person extends Sprite {

    constructor(data: any) {
        super(Res.getChar(data.skin)[data.image]);
        this.x = data.x;
        this.y = data.y;

    }

}