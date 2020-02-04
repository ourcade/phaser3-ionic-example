import Phaser from 'phaser'

import { KEY_CRATE } from './CratePool'

const INFO_FORMAT =
`Size:       %1
Spawned:    %2
Despawned:  %3`

export default class CratesScene extends Phaser.Scene
{
	private group?: ICratePool
	private infoText?: Phaser.GameObjects.Text

	constructor()
	{
		super('crates-scene-physics')
	}

	preload()
    {
		this.load.image(KEY_CRATE, 'assets/crate.png')
    }

    create()
    {
		this.matter.world.setBounds(0, -100, this.scale.width, this.scale.height + 100)

		this.group = this.add.cratePool()

		this.time.addEvent({
			delay: 500,
			loop: true,
			callback: () => {
				this.spawnCrate()
			}
		})

		this.infoText = this.add.text(16, 16, '')
		this.infoText.setDepth(1000)
	}

	update()
	{
		if (!this.group || !this.infoText)
		{
			return
		}

		const size = this.group.getLength()
		const used = this.group.getTotalUsed()
		const text = Phaser.Utils.String.Format(
			INFO_FORMAT,
			[
				size,
				used,
				size - used
			]
		)

		this.infoText.setText(text)
	}

	private spawnCrate()
	{
		if (!this.group)
		{
			return
		}

		if (this.group.countActive(true) >= 10)
		{
			return
		}

		const tex = this.textures.get(KEY_CRATE)
		const halfWidth = tex.getSourceImage().width * 0.5
		const x = Phaser.Math.Between(halfWidth, this.scale.width - halfWidth)

		const crate = this.group.spawn(x, 0)

		if (!crate)
		{
			return
		}

		crate.setInteractive()
			.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, pointer => {

				this.group!.despawn(crate)
			})

		return crate
	}
}
