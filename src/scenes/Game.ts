import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
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

        this.background = this.add.image(190, 300, 'bg');

        this.player = this.physics.add.image(10,10, 'guy').setScale(2.5);
        this.player.setCollideWorldBounds(true);

        

        this.input.once('pointerdown', () => {
            // float player
        });
    }

    update() {
            if (this.cursors.up.isDown) {
            this.player.setVelocityY(-150);
        }
    }
}
