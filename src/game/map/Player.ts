/*

*/

import { BaseTexture, Rectangle, Sprite, Texture } from 'pixi.js';
import { textSpanIntersectsWithPosition } from 'typescript';
import { Res } from '../../Res';
import { Map } from '../map/Map'

export class Player extends Sprite {

    textures: Array<Texture>;

    running: boolean = false;

    direction: number = 0;
    //  front
    //  left
    //  right
    //  back

    state: number = 0;
    //  right
    //  idle
    //  left

    speed: number = 2;

    static char:number = 0;

    constructor() {
 
        super();
        this.textures = Res.getChar(Player.char)
        this.x = 50;
        this.y = 50;
        this.anchor.set(0.5,0.8)
        this.texture = this.textures[0]


        document.addEventListener("keydown", (ev: KeyboardEvent) => {

            const n = Player.getKey(ev.keyCode);
            if (n != -1) {
                this.direction = n;
                this.running = true;
            }

        });
        document.addEventListener("keyup", (ev: KeyboardEvent) => {

            const n = Player.getKey(ev.keyCode);
            if (n != -1) {
                if (n == this.direction) {
                    this.running = false;

                }
            }

        });

    }

    setState = ()=>{
        if(this.running){
            this.state = ((Math.floor(Date.now()/150))%3)
            

        }else{
            
            this.state = 1;
        }
        // console.log(this.state)
        
    }



    setTexture() {
        this.texture = this.textures[this.direction * 3 + this.state];
        //console.log(this.x,this.y)
    }

    update = ()=> {
        //console.log("iter")
        const x = this.x
        const y = this.y
        if (this.running) {
            switch (this.direction) {
                case 0:
                    this.y += this.speed;
                    break;

                case 1:
                    this.x -= this.speed;
                    break;

                case 2:
                    this.x += this.speed;
                    break;

                case 3:
                    this.y -= this.speed;
                    break;
            }
        }

        if(!Map.tiles.getTile(Math.floor(this.x/16),Math.floor(this.y/16)).walk ){
            this.x = x
            this.y = y
        }
        this.setState()
        this.setTexture()
        

    }
    static getKey(n: number): number {

        const KeyPair = [40, 37, 39, 38];
        for (let i = 0; i < KeyPair.length; i++) {
            if (KeyPair[i] == n) {
                console.log("changed dir")
                return i;
            }
        }
        return -1;
    }
}