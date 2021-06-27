# PIXI.JS ALBERTO GAME
* write typescritpt code on folder "/src"
* compile typescript running 'npm run tscb'
* open html file "/res/index" to visualize the contente of the page


```
PixiRPG
├─ README.md
├─ package.json
├─ res
│  ├─ Maps
│  │  └─ sqare.json
│  ├─ img
│  │  ├─ basictiles.png
│  │  └─ characters.png
│  ├─ index.html
│  └─ js
│     └─ mapCreator.js
├─ src
│  ├─ Loading.ts
│  ├─ Main.ts
│  ├─ Pixi.ts
│  ├─ Res.ts
│  ├─ game
│  │  ├─ Game.ts
│  │  └─ map
│  │     ├─ Map.ts
│  │     ├─ NetPlayer.ts
│  │     ├─ Player.ts
│  │     ├─ Tile.ts
│  │     └─ TileCollector.ts
│  ├─ mainMenu
│  │  ├─ CharChoose.ts
│  │  ├─ LoginBtn.ts
│  │  └─ MainMenu.ts
│  └─ tool
│     └─ Image.ts
└─ tsconfig.json

```


# Founders
* [Alberto Zanovello](https://github.com/ZanovelloAlberto/)

# Contributors
* Bin Hu
* [Gianluca Beltrame](https://github.com/GianlucaBeltrame)
* Riccardo Bragagnolo
* [Nicolò Trinca](https://github.com/nikxtr)


# Image of Game
All image both characters and tiles are 16 X 16 
## Tiles
here the tile that can be used to create a JavaScript Object Notation map, 
that should be placed in the ```/res/maps/*name_map*.json``` folder.
<img src="res/img/basictiles.png"></img>
### structure of the json

> cell placed as base.
> tell the game where the player can move.
> cell will draw over backgroud.

* cell_height
* cell_width 
* backgroud_layer   
* walk_layer        
* objects_layer     





## Characters
<img src="res/img/characters.png"></img>
chracates are already fully implemented, look at [Player](src/Res.ts).ts and [Res.ts](src/game/map/Player.ts) for implementation 

