import Phaser from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
    width: '100%',
    height: '100%',
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-container-2',
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 550 },
            debug: false
        }
    }
}

export default config
