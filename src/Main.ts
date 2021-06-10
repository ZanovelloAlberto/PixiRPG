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
var loader = new Res();

var game : Game;


loader.load((loader, resources) => {
    loader.resource = resources;
    game = new Game(loader,pixi);
});

document.body.appendChild(pixi.view);
















