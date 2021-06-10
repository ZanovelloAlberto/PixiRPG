import { BaseTexture, Rectangle, Sprite, Texture } from 'pixi.js';
import { isMappedTypeNode, textSpanContainsPosition } from 'typescript';
export class Player {

    sprite: Sprite = new Sprite();
    texture: Array<Texture>;

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

    speed: number = 1;


    constructor(images: Array<Texture>) {

        this.texture = images;
        this.sprite.x = 100;
        this.sprite.y = 100;

        document.addEventListener("keydown", (ev: KeyboardEvent) => {

            const n = Player.getKey(ev.keyCode);
            if (n != -1) {
                this.direction = n;
                this.running = true;
            }
    
        });
        document.addEventListener("keyup", (ev: KeyboardEvent)=> {

            const n = Player.getKey(ev.keyCode);
            if (n != -1) {
                if (n == this.direction) {
                    this.running = false;
    
                }
            }
    
        });

        setInterval(() => {


            if (this.running) {
                if (this.state) {
                    this.state = 0;
                } else {
                    this.state = 2;
                }
            } else {
                this.state = 1;
            }
    
        }, 200);
    }



    drawPerson() {
        this.sprite.texture = this.texture[this.direction * 3 + this.state];
    }

    update() {

        if (this.running) {
            switch (this.direction) {
                case 0:
                    this.sprite.y += this.speed;
                    break;

                case 1:
                    this.sprite.x -= this.speed;
                    break;

                case 2:
                    this.sprite.x += this.speed;
                    break;

                case 3:
                    this.sprite.y -= this.speed;
                    break;
            }
        }
        this.drawPerson();

    }
    static getKey(n: number): number {

        const KeyPair = [40, 37, 39, 38];
        for (let i = 0; i < KeyPair.length; i++) {
            if (KeyPair[i] == n) {
                return i;
            }
        }
        return -1;

    }




}