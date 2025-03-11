import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    bg: any;
    pipes: any;
    lowerPipe: any;
    constructor ()
    {
        super('Game');
    }


    preload(){

        this.load.image('guy', 'assets/bird.png');
        this.load.image('pipe', 'assets/doublepipe.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard!.createCursorKeys();
        
        // this.background = this.add.image(190, 300, 'bg');
        this.bg = this.add.tileSprite(190,300, 390, 600, 'bg');

        this.player = this.physics.add.image(10,10, 'guy').setScale(2.5);
        this.player.setCollideWorldBounds(true);
        
        this.pipes = this.physics.add.group( {
            allowGravity: false,
        });
        
        this.createPipe();

    }
    
    update() {
        if (this.cursors.space.isDown) {
            this.player.setVelocityY(-120);
        }

        this.bg.tilePositionX += 1;
        this.pipes.children.iterate((pipe: any) => {
            // move left ( x-- )
            pipe.x--;
            if (pipe.x < -100){
                this.pipes.remove(pipe);
                this.createPipe();
            }
        })
    }

    createPipe(){
        // Phaser.Math.FloatBetween
        // value = Phaser.Math.FloatBetween(min, max);
        let yCoord = Phaser.Math.FloatBetween(-50, 55);

        let pipe = this.add.image(400, yCoord, 'pipe').setScale(1.5);
        this.pipes.add(pipe);

        let yCoordLower = Phaser.Math.FloatBetween(550, 665);
        let lowerPipe = this.add.image(400, yCoordLower, 'pipe').setScale(1.5);
        this.lowerPipe.add(pipe);
    }
}
