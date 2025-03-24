import { Scene } from 'phaser';

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameover_text : Phaser.GameObjects.Text;
    bg: any;

    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.bg = this.add.tileSprite(190,300, 390, 600, 'bg');


        this.gameover_text = this.add.text(100, 200, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        });

        this.gameover_text = this.add.text(190, 300, 'Score: ' ,{
            fontFamily: 'Arial Black', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        });
        this.gameover_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }

    update () {
        this.bg.tilePositionX += 1.85;
    }
}
