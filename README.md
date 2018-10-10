# extract-by-module-config
a code for creating CONFIG-FILE for osmium extract to get extracts cut by what3numbers

## background
I would like to cut planet.osm.pbf into tiles, so that I can split the task into modules.  

## install
```console
$ git clone git@github.com:hfu/extract-by-module-config
$ cd extract-by-module-config
$ npm install 
```

## usage
If you want to create z=6 tile configuration:
```console
$ node index.js 6 > config.json
```

You can use config.json with osmium extract. 
