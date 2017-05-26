let pkg = require('./package.json');
let fs = require('fs');
let path = require('path');

delete pkg.scripts;

let configs = [{
    name: 'react-anix',
    path: './build/'
}];

for (let i = 0; i < configs.length; i++) {
    clonePkg(configs[i]);
}

function clonePkg(config) {
    let newPkg = Object.assign({}, pkg, {
        name: config.name,
        main: 'index.js'
    });
   
    let url = config.path;
    
    fs.writeFileSync(url + 'package.json', JSON.stringify(newPkg, null, 2));
    fs.writeFileSync(url + 'README.md', fs.readFileSync('./README.md').toString());
}