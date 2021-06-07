import * as PIXI from 'pixi.js';
import { Sprite } from 'pixi.js';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
var app = new PIXI.Application();

const characters =  PIXI.Texture.from("/res/img/characters.png");

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);
window.onload = window.onresize = function () {

    app.view.width = document.body.clientWidth; //document.width is obsolete
    app.view.height = document.body.clientHeight; //document.height is obsolete
};

app.loader.add("characters","/res/img/characters.png");
