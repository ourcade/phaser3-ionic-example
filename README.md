# phaser3-ionic-example

A basic Ionic example based on the official [Your First Ionic App: Angular](https://ionicframework.com/docs/angular/your-first-app) guide.

## Demo

https://ourcade.github.io/phaser3-ionic-example

## Running Project

You need Ionic installed.

```bash
npm install -g @ionic/cli
```

Then run with:

```bash
npm run serve
```

## Tabs

- **Tab 1**: The basic Phaser example of a bouncing logo
- **Tab 2**: TypeScript version of Flabby Bird game from [Flappy-Bird-Phaser3](https://github.com/geongeorge/Flappy-Bird-Phaser3/)
- **Tab 3**: Simple Matterjs physics demo with crates from [Kenney.nl](http://kenney.nl)

## Polyfills

```js
(window as any).global = window
```

The above was added to `polyfills.ts` for Phaser.

## Other Notes

I prefer tabs but the Ionic starter project uses spaces so there is inconsistent tabs and spaces in the project. Burn me at the stake if you must. 🔥
