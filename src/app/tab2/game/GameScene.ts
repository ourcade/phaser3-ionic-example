import Phaser from 'phaser'

const SCENE_KEY = 'flappy-bird-game'
const xGap = 250

export default class GameScene extends Phaser.Scene
{
	private score = 0

	private platforms: Phaser.Physics.Arcade.StaticGroup
	// private spacebar: Phaser.Input.Keyboard.Key
	private player: Phaser.Physics.Arcade.Sprite
	private scoreText: Phaser.GameObjects.Text

	private hitflag = false

	private isPaused = false
	private gameOver = false

	private countpipe = 0

	constructor()
	{
		super(SCENE_KEY)
	}

	preload()
	{
		this.load.image('sky', 'assets/flappy/sky.png')
		this.load.image('pipeb', 'assets/flappy/pipeb.png')
		this.load.image('pipet', 'assets/flappy/pipet.png')
		this.load.spritesheet('birdy',
			'assets/flappy/birdy.png',
			{ frameWidth: 34, frameHeight: 24 }
		)

		this.load.audio('flap', './assets/flappy/sounds/sfx_wing.ogg')
		this.load.audio('hit', './assets/flappy/sounds/sfx_hit.ogg')
		this.load.audio('die', './assets/flappy/sounds/sfx_die.ogg')
		this.load.audio('score', './assets/flappy/sounds/sfx_point.ogg')
	}

	create()
	{
		const gameWidth = this.scale.width
		const gameHeight = this.scale.height

		const colors = ['0x1fbde0', '0x0a4957', '0x08272e']

		const randColor = colors[Math.floor(Math.random() * colors.length)]
		this.cameras.main.setBackgroundColor(randColor)

		const birdyX = (gameWidth / 2) - 50
		const birdyY = (gameHeight / 2) - 50

		// Add score text
		this.scoreText = this.add.text(birdyX, (gameHeight / 4), this.score.toString(), { fontFamily: '"04b19"', fontSize: 60, color: '#fff' })

		this.platforms = this.physics.add.staticGroup()

		const pipePos = gameWidth + 2 * xGap
		const pos = this.getRandom()

		// bottom placable at 260+gap to height
		this.platforms.create(pipePos, pos[0], 'pipeb').setScale(1).refreshBody();
		this.platforms.create(pipePos, pos[1], 'pipet').setScale(1).refreshBody();

		this.player = this.physics.add.sprite(birdyX, birdyY, 'birdy');

		this.player.setBounce(0.2);
		this.player.setCollideWorldBounds(true);

		this.anims.create({
			key: 'flap',
			frames: this.anims.generateFrameNumbers('birdy', { start: 0, end: 3 }),
			frameRate: 20,
			repeat: 0
		});

		(this.player.body as Phaser.Physics.Arcade.Body).setGravityY(300)

		this.physics.add.collider(this.player, this.platforms, this.playerHit, null, this)

		// this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

		this.input.keyboard.on('keydown-' + 'SPACE', this.flapNow, this)

		// touch support
		this.input.on('pointerdown', this.flapNow, this)
	}

	update()
	{
		const gameWidth = this.scale.width
		const gameHeight = this.scale.height

		const children = this.platforms.getChildren()
		children.forEach((child) => {
			if (child instanceof Phaser.Physics.Arcade.Sprite)
			{
				child.refreshBody();
				child.x += -3;
				// when one set of pipe is just shown
				// @ts-ignore
				if (child.x <= gameWidth && !child.drawn)
				{
					this.countpipe += 1

					// @ts-ignore
					child.drawn = true

					if (this.countpipe >= 2)
					{
						const pos = this.getRandom()
						console.log('created one')

						this.platforms.create(gameWidth + xGap, pos[0], 'pipeb').setScale(1).refreshBody()

						this.platforms.create(gameWidth + xGap, pos[1], 'pipet').setScale(1).refreshBody()
						this.countpipe = 0
					}

					// child.x = game.canvas.width+pipeWidth;
					// child.y = getRandom()[0];
				}
				if (child.x <= -50)
				{
					console.log('Destroyed one ' + this.countpipe)
					child.destroy()
				}

				const birdyX = (gameWidth / 2) - 50

				// check if pipe passed bird (birdyX)
				// @ts-ignore
				if (child.x < birdyX && !this.gameOver && child.texture.key === 'pipeb' && !child.scored)
				{
					// only check one pipe
					// @ts-ignore
					child.scored = true
					this.score += 1

					this.scoreText.setText(this.score.toString())
					this.game.sound.play('score')

					console.log('score:', this.score)
				}
			}
		})

		// set lower Bounds
		// console.log("y= ",player.y)
		if (this.player.y > gameHeight + 200)
		{
			console.log('y= ', this.player.y)
			this.endGame()
		}

		// set upper Bounds
		if (this.player.y < -200)
		{
			console.log('y= ', this.player.y)
			this.endGame()
		}
	}

	private flapNow()
	{
		if (this.gameOver)
		{
			return
		}

		if (this.isPaused)
		{
			this.resume()
		}

		// console.log("flap")
		this.player.setVelocityY(-330)

		this.game.sound.play('flap')
	}

	private playerHit()
	{
		if (this.hitflag)
		{
			return
		}

		console.log('Player hit!!!!!!!!!')

		this.game.sound.play('hit')
		this.hitflag = true

		setTimeout(() => {
			this.playerDead()
		}, 200)
	}

	private playerDead()
	{
		console.log('Player dead!!!!!!!!!')
		this.game.sound.play('die')
		this.player.setCollideWorldBounds(false)
		this.gameOver = true
	}

	private getRandom()
	{
		const safePadding = 25
		const gap = 150

		const min = Math.ceil(safePadding + gap / 2)
		const max = Math.floor(this.game.canvas.height - safePadding - gap / 2)
		const ran =  Math.floor(Math.random() * (max - min + 1)) + min
		const rantop = ran - ((gap / 2) + 260)
		const ranbot = ran + ((gap / 2) + 260)
		console.log(ranbot, rantop)
		return [ranbot, rantop]
	}

	private endGame()
	{
		this.gameOver = true;
		this.pause()
		console.log('game paused')

		this.player.y = 450
	}

	private pause()
	{
		console.log('pause')
		this.isPaused = true

		this.game.scene.pause(SCENE_KEY)
	}

	private resume()
	{
		console.log('resume')
		this.isPaused = false

		this.game.scene.resume(SCENE_KEY)
	}
}

export {
	SCENE_KEY
}
