//import * as PIXI from 'pixi.js';
import { Application, BaseTexture, Rectangle, Resource, SCALE_MODES, settings, Sprite, Texture } from 'pixi.js';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
var app = new Application();

const characters =  Texture.from("/res/img/characters.png");


// Use the native window resolution as the default resolution
 // will support high-density displays when rendering
 settings.RESOLUTION = window.devicePixelRatio;

 // Disable interpolation when scaling, will make texture be pixelated
 settings.SCALE_MODE = SCALE_MODES.NEAREST;

var app = new Application();
// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);
// load the texture we need
app.loader.add('bunny', '/res/img/characters.png').load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image
    var bunny = new Sprite(new Texture(resources.bunny.texture,new Rectangle(0,0,16,16)));
    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;
    bunny.width = 100;
    bunny.height = 100;
    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);
    // Listen for frame updates
    app.ticker.add(function () {
        // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });
});



function getChar(i:number) : Texture{
    
    return new Texture(new BaseTexture("char"),new Rectangle(0,0,16*3,16*4));
}




