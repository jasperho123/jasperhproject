import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    bg: any;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.bg = this.add.tileSprite(190,300, 390, 600, 'bg');

        this.logo = this.add.image(190, 60, 'logo').setScale(0.5);

        this.title = this.add.text(190, 120, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.title = this.add.text(75, 300, 'Press to Start', {
            fontFamily: 'Arial Black', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        })        
        this.title = this.add.text(110, 350, 'Flappybird', {
            fontFamily: 'Arial Black', fontSize: 25, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        })
        this.title = this.add.text(20, 450, 'To jump press spacebar', {
            fontFamily: 'Arial Black', fontSize: 25, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        })

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }

    update () {
        this.bg.tilePositionX += 1.85;
    }
}
