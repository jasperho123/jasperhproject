import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    bg: any;
    pipe: any;
    constructor ()
    {
        super('Game');
    }

    preload(){

        this.load.image('guy', 'assets/bird.png');
        this.load.image('pipe', 'assets/pipe.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard!.createCursorKeys();
        
        // this.background = this.add.image(190, 300, 'bg');
        this.bg = this.add.tileSprite(190,300, 390, 600, 'bg')
        
        // this.pipe = this.add.tileSprite(190, 300, 270, 148, 'pipe').setScale(2.5);

        this.player = this.physics.add.image(10,10, 'guy').setScale(2.5);
        this.player.setCollideWorldBounds(true);

        

        this.input.once('pointerdown', () => {
            // float player
        });
    }

    update() {
            if (this.cursors.space.isDown) {
            this.player.setVelocityY(-150);
        }

        this.bg.tilePositionX += 1;
        // this.pipe.tilePositionX += 1;
    }
}
