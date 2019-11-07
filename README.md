# zifine
Nothing to see here, it's just me playing with web stuff.

## Config
You'll need Wordpress with the currently secret acf-hero-colors -plugin, acf-to-rest-api -plugin, acf itself and menu named 'Valikko'.

With acf, create field group with three fields:
1. Hero image (name: hero_image, type: image)
2. Light color (light_color, jquery color picker)
3. Dark color (dark_color, jquery color picker)
   
And then configure this field group so it shows up on page editor. 

## Development
1. `npm install`
2. Copy `.env.sample` as `.env.development` and fill the values
3. `npm run dev`
