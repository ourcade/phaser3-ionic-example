import { Component } from '@angular/core'

import Phaser from 'phaser'
// import HelloWorldScene from './phaser/HelloWorldScene'
import CrateScene from './phaser/CrateScene'

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page
{
	private game: Phaser.Game

	constructor()
	{
	}

	ionViewWillEnter()
	{
		const config: Phaser.Types.Core.GameConfig = {
			parent: 'phaser-container-3',
			type: Phaser.AUTO,
			width: '100%',
			height: '100%',
			physics: {
				default: 'matter',
				matter: {
					debug: true
				}
			},
			scene: CrateScene
		}

		this.game = new Phaser.Game(config)
	}

	ionViewDidLeave()
	{
		this.game.destroy(true)
		this.game = null
	}
}
