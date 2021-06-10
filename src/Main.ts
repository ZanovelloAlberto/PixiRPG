//import * as PIXI from 'pixi.js';
import { Application, BaseTexture, Rectangle, Resource, SCALE_MODES, settings, Sprite, Texture } from 'pixi.js';
import { Game } from './Game'
import { Res } from './Res'

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container

// Use the native window resolution as the default resolution
// will support high-density displays when rendering
//settings.RESOLUTION = window.devicePixelRatio;



export class Main{

    pixi = new Application();

    loader:Res;
    
    game:Game;

    constructor(){

        this.loader = new Res();
        this.loader.load((loader, resources) => {
            loader.resource = resources;
        });

        document.body.appendChild(this.pixi.view);
    }



}
new Main();





// The application will create a canvas element for you that you
// can then insert into the DOM

// load the texture we need
//app.loader.


// DECLARE OBJECTS













