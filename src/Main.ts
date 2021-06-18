import { Game } from './Game'
import { Pixi } from './Pixi';
import { Res } from './Res'
import { Loading } from './Loading'
// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container

// Use the native window resolution as the default resolution
// will support high-density displays when rendering
//settings.RESOLUTION = window.devicePixelRatio;
window.WebGL2RenderingContext.NEAREST
var pixi =  new Pixi();

var game : Game;


Res.startx = ()=>{

    pixi.stage.removeChildren(0);
    game = new Game(pixi);
    pixi.stage.addChild(game);

}
const loader = new Res();
const Load = new Loading(pixi.stage)





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
    // pixi.view.style.display = 'block'
    pixi.view.style.margin = 'auto'

}
resize()
window.onresize = resize;


















