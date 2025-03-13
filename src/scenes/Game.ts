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

        this.player = this.physics.add.image(30,30, 'guy').setScale(2.5);
        this.player.setCollideWorldBounds(false);
        this.player.addCollidesWith(this.pipes)
        
        this.pipes = this.physics.add.group( {
            allowGravity: false,
            
        });
        
        this.pipes.addCollidesWith(this.player)

        this.createPipe();

    }
    
    update() {
        if (this.cursors.space.isDown) {
            this.player.setVelocityY(-170);
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
        let gap = 100;
        let edge = Phaser.Math.FloatBetween(gap, 600-gap);
        let yCoord;
        if (Math.random() < 0.5){ // top
            yCoord = edge-gap;
        } else { // bottom
            yCoord = edge+gap;
        }

        let pipe = this.add.image(380, yCoord, 'pipe').setScale(1.5);
        this.pipes.add(pipe);

    }
}
