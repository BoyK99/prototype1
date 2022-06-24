// Import PIXI
import * as PIXI from 'pixi.js';

export class Background extends PIXI.TilingSprite{

    // Load image
    constructor(texture: PIXI.Texture, width: number, height: number){
        super(texture, width, height);
    }

    // Image speed function
    public updateBg(speed: number) {
        this.tilePosition.x -= speed
    }
}