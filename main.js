import Phaser from 'phaser'

import scene from './scene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [scene]
}
// lol
export default new Phaser.Game(config)