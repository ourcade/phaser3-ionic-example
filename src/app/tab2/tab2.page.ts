import { Component } from '@angular/core'

import Phaser from 'phaser'

import config from './game/config'
import GameScene, { SCENE_KEY } from './game/GameScene'

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page
{
	private game: Phaser.Game

	constructor() {}

	ionViewWillEnter()
	{
		this.game = new Phaser.Game(config)
		this.game.scene.add(SCENE_KEY, GameScene, true)
	}

	ionViewDidLeave()
	{
		this.game.destroy(true)
		this.game = null
	}
}
