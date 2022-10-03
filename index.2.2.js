const fs = require('fs');
const path = require('path');
const util = require('util');
const readDir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const search = async inpath => {
    const files = await readDir(inpath);
    files.forEach(async file => {
        const fullPath = path.join(inpath, file);
        const filestat = await stat(fullPath);
        if (filestat.isDirectory()) await search(fullPath);
        else if (path.extname(fullPath) === '.js') console.log(fullPath);
    })
};

(async () => {
    try {
        await search('./test');
    } catch (err) {
        console.error(err);
    }
})();
