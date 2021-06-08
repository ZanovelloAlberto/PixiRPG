import { BaseTexture, Rectangle, Sprite, Texture } from 'pixi.js';
import { textSpanContainsPosition } from 'typescript';
class Player {

    sprite: Sprite;
    texture: Array<Texture> = [];
    speed: number = 35;
    running:boolean = false;

    constructor(t: BaseTexture) {
        
        for (let i = 0; i < 16; i++) {
            this.texture.push(new Texture(t,new Rectangle(i%3*16,i/3*16,16,16)))
        }
        document.addEventListener("keydown", keyDown);
        document.addEventListener("keyup", keyUp);

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
    direction: number = 0 | 1 | 2 | 3;
    //  front
    //  left
    //  right
    //  back

    state: number = 0 | 1 | 2;
    //  right leg
    //  idle
    //  left leg


    drawPerson(Person) {
        this.sprite.texture = new Texture(new BaseTexture(this.texture), new Rectangle(0, 0, 0, 0))
    }

    keyUp(ev:KeyboardEvent) {
        if (this.keypair(ev.keyCode) == this.direction) {
           this.running = false;
        }
    }
    
    keyDown(ev : KeyboardEvent) {

        if (!this.running) {

            this.running = true;
            this.direction = this.keypair(ev.keyCode);
        }
    }

    update() {
        if (hero.running) {
            switch (hero.direction) {
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
        this.sprite.texture = this.texture[this.direction*3 + this.state]
    }

    keypair(x : number): 1 | 0 | 2 | 3 {
        switch(x){
                case 37:
                    return 1;

                case 38:
                    return 3;

                case 39:
                    return 2;

                case 40:
                    return 0;
        }
        return 0;
    }
}