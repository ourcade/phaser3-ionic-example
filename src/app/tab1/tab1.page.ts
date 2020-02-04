import { Component } from '@angular/core'

import Phaser from 'phaser'
import HelloWorldScene from './scenes/HelloWorldScene'

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page
{
	private game: Phaser.Game

	constructor() {}

	ionViewWillEnter()
	{
		const config: Phaser.Types.Core.GameConfig = {
			parent: 'phaser-container-1',
			type: Phaser.AUTO,
			width: '100%',
			height: '100%',
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 200 }
				}
			},
			scene: HelloWorldScene
		}

		this.game = new Phaser.Game(config)
	}

	ionViewDidLeave()
	{
		this.game.destroy(true)
		this.game = null
	}

}
