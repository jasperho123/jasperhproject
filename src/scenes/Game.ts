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

    create ()
    {
        this.background = this.add.image(190, 200, 'bg');



        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update() {

    }
}
