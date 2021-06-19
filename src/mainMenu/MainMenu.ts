import { Container, PI_2, Sprite, Ticker, TilingSprite } from "pixi.js";
import { LoginBtn } from "./LoginBtn";
import { Pixi } from "../Pixi";
import { Game } from "../game/Game";
import { pixi } from '../Main'
import { Res } from '../Res'
import { CharChoose } from './CharChoose'

    




export class MainMenu extends Container{

    play:LoginBtn
    choose:CharChoose
    
    //back:sprite
    constructor(){
        super()
        const back = new TilingSprite(Res.getTile(4,11))
        back.height = Pixi.height
        back.width = Pixi.width

        this.addChild(back)
        //this.tint = 0xce644
        

        this.play = new LoginBtn(8,8,2,"play",()=>{
            Game.start();
            
        })
        this.addChild(this.play) 


        // CHAR CHOOSE 
        this.choose = new CharChoose()
        this.addChild(this.choose)


    }
    static start = ()=>{
        pixi.stage.removeChildren(0)
        pixi.stage.addChild(new MainMenu())
    }

    
}