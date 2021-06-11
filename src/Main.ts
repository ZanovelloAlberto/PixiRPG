//import * as PIXI from 'pixi.js';

import { Game } from './Game'
import { Pixi } from './Pixi';
import { Res } from './Res'
// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container

// Use the native window resolution as the default resolution
// will support high-density displays when rendering
//settings.RESOLUTION = window.devicePixelRatio;

var pixi = new Pixi();




var game : Game;


Res.finished = ()=>{

    game = new Game();
    pixi.stage.addChild(game);
    console.log("worked");

}
var loader = new Res();

document.body.appendChild(pixi.view);
















