// Import PIXI
import * as PIXI from 'pixi.js';

// Import Images
import backTrees from '../images/back.png';
import middleTrees from '../images/middle.png';
import frontTrees from '../images/front.png';
import lightTrees from '../images/lights.png';

// Import Classes
import { Background } from './background';

export class Game{
    // Globals
    private pixiWidth = 800;
    private pixiHeight = 150;
    private backColor = 0xAAAAAA;

    public pixi : PIXI.Application;
    private loader : PIXI.Loader;

    public background : Background;
    public background1: Background;
    public background2: Background;
    public background3: Background;
    
    constructor(){
        // Create PIXI Stage
        this.pixi = new PIXI.Application({width: this.pixiWidth, height: this.pixiHeight, backgroundColor: this.backColor});
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        // Create Loader
        this.loader = new PIXI.Loader();
        this.loader
            .add('backTrees', backTrees)
            .add('midTrees', middleTrees)
            .add('frontTrees', frontTrees)
            .add('lightTrees', lightTrees);
        this.loader.load(()=>this.loadCompleted());
    }

    private loadCompleted(){
        // Adding background to stage
        this.background3 = new Background(this.loader.resources["lightTrees"].texture!, this.pixiWidth, this.pixiHeight);
        this.background = new Background(this.loader.resources["backTrees"].texture!, this.pixiWidth, this.pixiHeight);
        this.background1 = new Background(this.loader.resources["midTrees"].texture!, this.pixiWidth, this.pixiHeight);
        this.background2 = new Background(this.loader.resources["frontTrees"].texture!, this.pixiWidth, this.pixiHeight);
    
        this.pixi.stage.addChild(this.background);
        this.pixi.stage.addChild(this.background3);
        this.pixi.stage.addChild(this.background1);
        this.pixi.stage.addChild(this.background2);

        // Update
        this.pixi.ticker.add((delta) => this.update(delta));
    }

    // Set image speed
    private update(delta: number){ 
        this.background.updateBg(0.2);
        this.background1.updateBg(0.4);
        this.background2.updateBg(0.6);
        this.background3.updateBg(0.3);
    }
}

// Start game
new Game();


