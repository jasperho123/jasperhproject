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

        this.player = this.physics.add.image(10,10, 'guy').setScale(2.5);
        this.player.setCollideWorldBounds(true);
        
        this.pipes = this.physics.add.group( {
            allowGravity: false,
        });
        
        this.createPipe();

    }

    update() {
        if (this.cursors.space.isDown) {
            this.player.setVelocityY(-150);
        }

        this.bg.tilePositionX += 1;
        this.pipes.children.iterate((pipe: any) => {
            // move left ( x-- )
            pipe.x--;
            if (pipe.x < 0){
                this.pipes.remove(pipe);
                this.createPipe();
            }
        })
    }

    createPipe(){
        // Phaser.Math.FloatBetween
        let pipe = this.add.sprite(400,400,'pipe');
        this.pipes.add(pipe);
    }
}
