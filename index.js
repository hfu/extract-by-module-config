const tilebelt = require('@mapbox/tilebelt')

if (process.argv.length !== 3) {
  console.log(`usage: node index.js {Z} > config.json`)
}

const z = parseInt(process.argv[2])
let config = { 
  target: 'dst',
  extracts: []
}

for (let x = 0; x < 2 ** z; x++) {
  for (let y  = 0; y < 2 ** z; y++) {
     config.extracts.push({
       output: `${z}-${x}-${y}.osm.pbf`,
       output_format: 'pbf',
       bbox: tilebelt.tileToBBOX([x, y, z])
     })
  }
}

console.log(JSON.stringify(config, null, 2))
