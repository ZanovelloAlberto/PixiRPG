import { Game } from './Game'
import { Pixi } from './Pixi';
import { Res } from './Res'
// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container

// Use the native window resolution as the default resolution
// will support high-density displays when rendering
//settings.RESOLUTION = window.devicePixelRatio;
var pixi =  new Pixi();

var game : Game;


Res.finished = ()=>{

    game = new Game(pixi);
    pixi.stage.addChild(game);

}
var loader = new Res();

// window.onload = window.onresize = ()=>{
//     pixi.view.width = document.body.clientWidth; //document.width is obsolete
//     pixi.view.height = document.body.clientHeight; //document.height is obsolete
    
//     //game.scale.set(Math.min(document.body.clientWidth,document.body.clientHeight)/120)
    
// };
window.WebGL2RenderingContext.NEAREST
const ratio = 1
function resize() {
    if (window.innerWidth / window.innerHeight >= ratio) {
        var w = window.innerHeight * ratio;
        var h = window.innerHeight;
    } else {
        var w = window.innerWidth;
        var h = window.innerWidth / ratio;
    }
    pixi.view.style.imageRendering = "pixelated"
    pixi.view.style.width = w + 'px';
    pixi.view.style.height = h + 'px';
}
resize()
window.onresize = resize;


















