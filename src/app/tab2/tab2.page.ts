import { Component, OnInit } from '@angular/core'

import Phaser from 'phaser'

import config from './game/config'
import GameScene, { SCENE_KEY } from './game/GameScene'

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit
{
	constructor() {}

	ngOnInit()
	{
		const game = new Phaser.Game(config)
		game.scene.add(SCENE_KEY, GameScene, true)
	}
}
