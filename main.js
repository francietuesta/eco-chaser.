import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {}

function create() {
    this.add.text(260, 280, '¡Eco-Chaser Funcionando!', { 
        fontSize: '28px', 
        fill: '#4CAF50',
        fontStyle: 'bold'
    });
}