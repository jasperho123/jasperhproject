import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    platform: Phaser.Physics.Arcade.StaticGroup;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.background = this.add.image(512, 384, 'background');

        this.background.setAlpha(0.5);



        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });

        this.platform = this.physics.add.staticGroup();

        this.platform.create(400,400,'platform')

    }
}
