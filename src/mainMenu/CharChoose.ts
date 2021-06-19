import { Container, Sprite, Texture } from "pixi.js";
import { pixi } from "../Main";
import { Player } from "../game/map/Player";
import { Pixi } from "../Pixi";
import { Res } from "../Res";
import { textSpanIntersectsWithTextSpan } from "typescript";


export class CharChoose extends Container {





    image: Sprite
    left: Sprite
    right: Sprite
    back: Sprite
    MainDirection: number

    constructor() {
        super();

        this.back = new Sprite(Texture.WHITE)

        this.back.height = Pixi.height / 3
        this.back.width = Pixi.width / 2
        this.back.anchor.set(0.5, 0.5)
        this.back.tint = 0xeb3493
        this.MainDirection = 0;
        this.addChild(this.back)

        // MAIN IMAGE
        this.image = new Sprite();
        this.image.anchor.set(0.5, 0.5)
        this.image.on('pointerdown', () => {
            this.MainDirection += 1
            this.MainDirection = this.MainDirection % 4
            this.updateSide()
        })
        this.image.interactive = true
        this.image.scale.set(2)
        this.x = Pixi.width / 2
        this.y = Pixi.height / 2


        // LEFT 
        this.left = new Sprite(Res.getChar(Player.char - 1)[1])
        this.left.on('pointerdown', () => {
            if (Player.char > 0) {
                Player.char -= 1
                this.updateSide()
                this.MainDirection = 0
            }


        })
        this.left.anchor.set(0.5, 0.5)
        this.left.tint = 0x575656
        this.left.x = -Pixi.width / 6
        this.left.interactive = true;


        // RIGHT
        this.right = new Sprite(Res.getChar(Player.char + 1)[1])
        this.right.anchor.set(0.5, 0.5)
        this.right.on('pointerdown', () => {
            if (Player.char < 7) {
                Player.char += 1
                this.updateSide()
                this.MainDirection = 0
            }
        })
        this.right.tint = 0x575656
        this.right.x = +Pixi.width / 6
        this.right.interactive = true;


        this.updateSide();
        // ADD CHILD ------------------------------------

        this.addChild(this.left, this.image, this.right)

    }

    updateSide = () => {
        const a = Math.floor(1 + this.MainDirection * 3)
        console.log(a)

        const voto = Res.getTile(0,13)
        this.left.texture = voto
        this.right.texture = voto
        if(Player.char!=0){
            this.left.texture = Res.getChar(Player.char - 1)[1]
        }
        if(Player.char!=7){
            this.right.texture = Res.getChar(Player.char + 1)[1]
        }
        this.image.texture = Res.getChar(Player.char)[a]
        
    }
}