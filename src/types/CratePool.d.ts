declare interface ICratePool extends Phaser.GameObjects.Group
{
	spawn(x?: number, y?: number, key?: string)
	despawn(crate: Phaser.Physics.Matter.Image)
	initializeWithSize(size: number)
}

declare namespace Phaser.GameObjects
{
	interface GameObjectFactory
	{
		cratePool(): ICratePool
	}
}
