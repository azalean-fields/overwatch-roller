# overwatch-roller
A customizable random character picker for Overwatch styled after a CS:GO case, with a ton of inside jokes from my friend group. Supports 1-6 players, allows you to randomize a character for each role individually. 

## Usage
Download the repo as a zip, extract it and open the html file in your browser of choice.

## Customization
### Adding new characters
All characters are stored in one object. Adding a new character requires adding it to one of the arrays (depending on if the hero is a tank/damage/support), and optionally adding an image and tier.

### Tiers
Each character has a tier assigned to it. Every tier has its own color and a sound effect which plays upon selection. Tiers are located at the beginning of the stylesheet, while sfx are accessed in an object in the script. When adding a new tier, you need to assign a number and color to it. It is recommended to also add card data, keyframes and a win animation for it, which can be copypasted from existing tiers.

*All of the above should be commentated in the file with "add new [x] here"*

Originally created by kenziewebm (https://github.com/kenziewebm), maintained by Azalea Heartfelt