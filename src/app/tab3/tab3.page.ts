import { Component, OnInit } from '@angular/core'

import Phaser from 'phaser'
// import HelloWorldScene from './phaser/HelloWorldScene'
import CrateScene from './phaser/CrateScene'

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit
{
	constructor()
	{
	}

	ngOnInit()
	{
		const config: Phaser.Types.Core.GameConfig = {
			parent: 'phaser-container',
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

		return new Phaser.Game(config)
	}
}
